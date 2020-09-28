function stringy(num) {
  let repeated10s = '10'.repeat(Math.ceil(num / 2));
  return num % 2 === 0? repeated10s : repeated10s.slice(0, -1);
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
console.log(stringy(0));