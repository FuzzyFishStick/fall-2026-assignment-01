
import * as fs from 'fs';
import * as path from 'path';
 
export type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  };
};
 
const GRADEBOOK_PATH = path.join(__dirname, '..', 'data', 'gradebook.json');
 
export function calculateSubjectAverage(subject: string): number {
  const rawData = fs.readFileSync(GRADEBOOK_PATH, 'utf-8');
  const gradebook: Gradebook = JSON.parse(rawData);
 
  const scores: number[] = [];
 
  for (const studentName of Object.keys(gradebook)) {
    const studentSubjects = gradebook[studentName];
    if (Object.prototype.hasOwnProperty.call(studentSubjects, subject)) {
      scores.push(studentSubjects[subject]);
    }
  }
 
  if (scores.length === 0) {
    return 0;
  }
 
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}
