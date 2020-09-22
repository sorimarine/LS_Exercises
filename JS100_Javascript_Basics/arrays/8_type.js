function filter(input) {
  // Is input an array?
  return Array.isArray(input);
}

console.log(filter({dfd: []}));
console.log(filter([2]));
console.log(filter(' '));
console.log(filter(NaN));