let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function compareIgnoreCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase();
}

console.log(compareIgnoreCase(string1, string2));
console.log(compareIgnoreCase(string1, string3));
console.log(compareIgnoreCase(string2, string3));