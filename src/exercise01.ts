export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string 
{
  if(middleName !== undefined && middleName !== null && middleName.trim() !== '')
  {
    //const initial = middleName.charAt(0);
    return `${lastName}, ${firstName}, ${middleName.charAt(0)}.`;
  }
  
  return `${lastName}, ${firstName}`;
}
