const readline = require('readline-sync');

let numArray = [];

numArray.push(Number(readline.question('Enter the 1st number: ')));
numArray.push(Number(readline.question('Enter the 2nd number: ')));
numArray.push(Number(readline.question('Enter the 3rd number: ')));
numArray.push(Number(readline.question('Enter the 4th number: ')));
numArray.push(Number(readline.question('Enter the 5th number: ')));

let num6 = Number(readline.question('Enter the last number: '));

let appearString = 'does not appear';

if (numArray.includes(num6)) {
  appearString = 'appears';
}

console.log(`The number ${num6} ${appearString} in ${numArray.join(',')}.`)