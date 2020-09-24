const readline = require('readline-sync');

function sumOfIntegers(integer) {
  if (integer === 1) {
    return 1;
  } else {
    return integer + sumOfIntegers(integer -1);
  }
}

function productOfIntegers(integer) {
  if (integer === 1) {
    return 1;
  } else {
    return integer * productOfIntegers(integer -1);
  }
}

console.log('Please enter an integer greater than 0:');
let integer = Number(readline.question());

console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
let operationCode = readline.question();

if (operationCode === 's') {
  console.log(`The sum of the integers between 1 and ${integer}` +
              ` is ${sumOfIntegers(integer)}.`);
} else if (operationCode === 'p') {
  console.log(`The product of the integers between 1 and ${integer}` +
              ` is ${productOfIntegers(integer)}.`);
}


