export type PostItem = 
{
  id: number;
  title: string;
  body: string;
};

async function fetchSinglePost(postId: number): Promise<PostItem>
{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,);
  return (await response.json()) as PostItem;
}

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> 
{
  const fetchPromises = postIds.map((postId) => fetchSinglePost(postId));
  return Promise.all(fetchPromises);
}
