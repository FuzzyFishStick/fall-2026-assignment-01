export class InvalidNucleotideError extends Error
{
  constructor(character: string)
  {
    super(`Invalid DNA nucleotide encountered: "${character}"`)
    this.name = 'InvalidNucleotideError';
  }
}

const DNA_TO_RNA_MAP: Record<string, string> = 
{A: 'U', T: 'A', C: 'G', G: 'C'};

export function transcribeDNA(dna: string): string 
{
  let rna = '';

  for(const character of dna)
  {
    const upperCharacter = character.toUpperCase();
    const rnaCharacter = DNA_TO_RNA_MAP[upperCharacter];

    if(rnaCharacter == undefined)
    {
      throw new InvalidNucleotideError(character);
    }
    rna += character;
  }
  
  return '';
}
