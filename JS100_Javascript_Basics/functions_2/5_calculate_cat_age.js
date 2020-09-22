function catAge(humanYrs) {
  if (humanYrs > 2) {
    return 4 + catAge(humanYrs - 1);
  }
  let catYrs = 0;
  switch (humanYrs) {
    case 2: catYrs += 9;
    case 1: catYrs += 15;
  }
  return catYrs;
}

console.log(catAge(-12));
console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));