let DIGIT_STRINGS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let valueString = '';
  while (true) {
    let digit = integer % 10;
    valueString = DIGIT_STRINGS[digit] + valueString;
    integer = Math.floor(integer / 10);
    if (integer === 0) break;
  }
  return valueString;
}

function signedIntegerToString(integer) {
  let integerString = integerToString(Math.abs(integer));
  if (integer > 0) {
    return '+' + integerString;
  } else if (integer < 0) {
    return '-' + integerString;
  } else {
    return integerString;
  }
}

console.log(signedIntegerToString(4321) === '+4321');
console.log(signedIntegerToString(0) === '0');
console.log(signedIntegerToString(-5000) === '-5000');
console.log(signedIntegerToString(1234567890) === '+1234567890');