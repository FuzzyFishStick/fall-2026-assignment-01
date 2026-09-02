
import { promises as fsPromises } from 'fs';
 
export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};
 
type RawComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
 
export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`,
  );
  const rawComments = (await response.json()) as RawComment[];
 
  const summaries: CommentSummary[] = rawComments.map((comment) => ({
    postId: comment.postId,
    id: comment.id,
    commenterEmail: comment.email.trim(),
  }));
 
  const filteredSummaries = summaries.filter(
    (summary) => !summary.commenterEmail.toLowerCase().endsWith('.org'),
  );
 
  await fsPromises.writeFile(
    outputPath,
    JSON.stringify(filteredSummaries),
    'utf-8',
  );
 
  return filteredSummaries.length;
}