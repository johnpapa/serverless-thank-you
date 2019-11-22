import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import * as Octokit from '@octokit/rest';
import { IssuesCreateCommentParams } from '@octokit/rest';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
  context.log('*** HTTP trigger function processed a request.');

  const { body: payload } = req;
  context.log(payload);

  const {
    repository: {
      name: repo,
      owner: { login: owner }
    },
    issue: {
      number: issue_number,
      user: { login: user }
    }
  } = payload;

  const body = `Thank you @${user} for creating this issue!\n\nHave a Happy Holiday season!`;

  if (payload.action === 'opened') {
    context.log(body);
    const comment: IssuesCreateCommentParams = {
      repo,
      owner,
      issue_number,
      body
    };
    await createComment(context, comment);
  }

  context.res = {
    status: 200 /* Defaults to 200 */,
    body: body || 'Nothing to see here'
  };
};

async function createComment(context: Context, comment: IssuesCreateCommentParams) {
  const authKey = process.env.githubKey;
  const octokit = new Octokit({ auth: authKey });
  const response = await octokit.issues.createComment(comment);
  return response;
}

export default httpTrigger;
