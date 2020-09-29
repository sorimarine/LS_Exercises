const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retireAge = Number(readline.question('At what age would you like to retire? '));

let today = new Date();
let thisYear = today.getFullYear();
let yearsTilRetire = retireAge - age;
let retireYear = thisYear + yearsTilRetire;

console.log(`It's ${thisYear}. You will retire in ${retireYear}.`);
console.log(`You have ${yearsTilRetire} years of work to go!`);