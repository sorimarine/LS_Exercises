function getGrades(score1, score2, score3) {
  const GRADE_CUTOFFS = {
    A: 90,
    B: 80,
    C: 70,
    D: 60
  };

  let averageScore = (score1 + score2 + score3) / 3;
  let grade = 'F';
  
  if (averageScore >= GRADE_CUTOFFS.A) {
    grade = 'A';
  } else if (averageScore >= GRADE_CUTOFFS.B) {
    grade = 'B';
  } else if (averageScore >= GRADE_CUTOFFS.C) {
    grade = 'C';
  } else if (averageScore >= GRADE_CUTOFFS.D) {
    grade = 'D';
  }

  return grade;
}

console.log(getGrades(95, 90, 93) === 'A');
console.log(getGrades(50, 50, 95) === 'D');
console.log(getGrades(90, 70, 85) === 'B');