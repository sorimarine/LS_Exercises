let DIGIT_VALUE = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
} 

function stringToInteger(intString) {
  let numArrayReversed = intString.split('').reverse();
  let reducer = (acc, curr, index) => acc + (DIGIT_VALUE[curr] * (10 ** index));
  let integer = numArrayReversed.reduce(reducer, 0);
  return integer;
}

console.log(stringToInteger('542321') === 542321);
console.log(stringToInteger('23') === 23);
console.log(stringToInteger('4321') === 4321);
console.log(stringToInteger('570') === 570);