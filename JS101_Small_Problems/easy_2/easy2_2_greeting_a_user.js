const readline = require('readline-sync');

console.log('What is your name?');
let name = readline.question();

if (name.endsWith('!')) {
  greeting = `HELLO ${name.slice(0, -1).toUpperCase()}.`
              + ' WHY ARE WE SCREAMING?';
} else {
  greeting = `Hello ${name[0].toUpperCase() + name.slice(1)}.`;
}

console.log(greeting);