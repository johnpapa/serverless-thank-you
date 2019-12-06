import { IssuesCreateCommentParams } from '@octokit/rest';
import * as Octokit from '@octokit/rest';

export async function createIssueComment(comment: IssuesCreateCommentParams) {
  const auth = process.env.githubkey;
  const octokit = new Octokit({ auth });
  const response = await octokit.issues.createComment(comment);
  return response;
}
