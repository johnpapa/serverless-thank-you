import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import * as Octokit from '@octokit/rest';
import { IssuesCreateCommentParams } from '@octokit/rest';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
  context.log('*** HTTP trigger function processed a request.');

  const { body: payload } = req;
  context.log(payload);

  const repo = payload.repository.name;
  const owner = payload.repository.owner.login;
  const issue_number = payload.issue.number;
  const user = payload.issue.user.login;
  const action = payload.action;

  // const {
  //   repository: {
  //     name: repo,
  //     owner: { login: owner }
  //   },
  //   issue: {
  //     number: issue_number,
  //     user: { login: user }
  //   }
  // } = payload;

  let body = 'Nothing to see here';

  if (action === 'opened') {
    body = `Thank you @${user} for creating this issue!\n\nHave a Happy Holiday season!`;
    context.log(body);
    const comment: IssuesCreateCommentParams = {
      repo,
      owner,
      issue_number,
      body
    };
    await createComment(comment);
  }

  context.res = {
    status: 200 /* Defaults to 200 */,
    body
  };
};

async function createComment(comment: IssuesCreateCommentParams) {
  const auth = process.env.githubKey;
  const octokit = new Octokit({ auth });
  const response = await octokit.issues.createComment(comment);
  return response;
}

export default httpTrigger;
