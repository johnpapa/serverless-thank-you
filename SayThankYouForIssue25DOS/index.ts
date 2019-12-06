import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { IssuesCreateCommentParams } from '@octokit/rest';
import { createIssueComment } from '../lib/create-issue-comment';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
  const { body: payload } = req;
  // context.log(payload);

  const repo = payload.repository.name;
  const owner = payload.repository.owner.login;
  const issue_number = payload.issue.number;
  const user = payload.issue.user.login;
  const action = payload.action;

  let body = 'Nothing to see here';

  if (action === 'opened') {
    body = `From all of us on the Cloud Advocacy team at Microsoft, thank you @${user} for creating this issue!\n\nHave a Happy Holiday season!`;
    // body = `Thank you @${user} for creating this issue!\n\nHave a Happy Holiday season!`;
    context.log(body);
    const comment: IssuesCreateCommentParams = {
      repo,
      owner,
      issue_number,
      body
    };
    await createIssueComment(comment);
  }

  context.res = {
    status: 200 /* Defaults to 200 */,
    body
  };
};

export default httpTrigger;
