import {promises as fsPromises} from 'fs';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> 
{
  const timestampedMessage = `${statusMessage} ${new Date().toISOString()}`;
  await fsPromises.writeFile(filePath, timestampedMessage, 'utf-8');
}
