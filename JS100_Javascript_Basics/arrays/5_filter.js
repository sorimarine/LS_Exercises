let scores = [96, 47, 113, 89, 100, 102];

console.log(scores.reduce((acc, curr) => {
  if (curr >= 100) {
    return acc + 1;
  }
  return acc;
}, 0));