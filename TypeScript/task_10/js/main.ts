// 1️⃣ Define interfaces with branding for nominal typing
export interface MajorCredits {
  credits: number;
  __brand: 'major';  // unique identifier for MajorCredits
}

export interface MinorCredits {
  credits: number;
  __brand: 'minor';  // unique identifier for MinorCredits
}

// 2️⃣ Functions to sum credits

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major'
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor'
  };
}

// 3️⃣ Example usage
const math: MajorCredits = { credits: 3, __brand: 'major' };
const physics: MajorCredits = { credits: 4, __brand: 'major' };
const biology: MinorCredits = { credits: 2, __brand: 'minor' };
const chemistry: MinorCredits = { credits: 1, __brand: 'minor' };

const totalMajor = sumMajorCredits(math, physics);
const totalMinor = sumMinorCredits(biology, chemistry);

console.log('Total Major Credits:', totalMajor.credits);  // 7
console.log('Total Minor Credits:', totalMinor.credits);  // 3
