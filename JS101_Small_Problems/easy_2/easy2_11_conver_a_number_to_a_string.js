let DIGIT_STRINGS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let valueString = '';
  while (true) {
    let digit = integer % 10;
    valueString = DIGIT_STRINGS[digit] + valueString;
    integer = Math.floor(integer / 10);
    if (integer === 0) break;
  }
  console.log(valueString);
  return valueString;
}

console.log(integerToString(4321) === '4321');
console.log(integerToString(0) === '0');
console.log(integerToString(5000) === '5000');
console.log(integerToString(1234567890) === '1234567890');