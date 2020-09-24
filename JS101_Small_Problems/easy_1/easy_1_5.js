const readline = require('readline-sync');

console.log('What is the bill?');
let billAmount = Number(readline.question());
console.log('What is the tip percentage?');
let tipPercent = Number(readline.question());

let tipAmount = billAmount * tipPercent / 100;
let totalBill = billAmount + tipAmount;

console.log(`The tip is ${tipAmount.toFixed(2)}`);
console.log(`The total is ${totalBill.toFixed(2)}`)