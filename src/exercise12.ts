export type RemoteUser = 
{
  id: number;
  name: string;
  email: string;
};

export async function fetchUserEmails(): Promise<string[]> 
{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const rawUsers: unknown = await response.json();

  const remoteUsers: RemoteUser[] = (rawUsers as Array<Record<string, unknown>>).map((rawUser) =>
  ({id: rawUser.id as number, name: rawUser.name as string, email: rawUser.email as string, }))
  
  return remoteUsers.map((user) => user.email);
}
