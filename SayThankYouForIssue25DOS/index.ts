import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { IssuesCreateCommentParams } from '@octokit/rest';
import { createIssueComment } from '../lib/create-issue-comment';
import { issues_holiday, issues_oof } from '../lib/message';

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
    body = issues_oof ?? body;
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
