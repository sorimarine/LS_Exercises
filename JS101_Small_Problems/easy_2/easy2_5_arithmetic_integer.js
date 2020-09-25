const readline = require('readline-sync');

let num1, num2;

function prompt(message) {
  console.log(`==> ${message}`);
}

function formatExp(op) {
  return `${num1} ${op} ${num2} = `;
}

prompt('Enter the first number:');
num1 = Number(readline.question());
prompt('Enter the second number:');
num2 = Number(readline.question());

prompt(formatExp('+') + `${num1 + num2}`);
prompt(formatExp('-') + `${num1 - num2}`);
prompt(formatExp(`*`) + `${num1 * num2}`);
if (num2 === 0 || num2 === -0) {
  prompt('Cannot divide by zero.');
} else {
  prompt(formatExp('/') + `${parseInt(num1 / num2)}`);
}
prompt(formatExp('%') + `${num1 % num2}`);
prompt(formatExp('**') + `${num1 ** num2}`);