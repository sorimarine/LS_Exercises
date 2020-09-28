const readline = require('readline-sync');

function madlibs(noun, verb, adjective, adverb) {
  let logString = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!` +
                  `\nThe ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.` +
                  `\nThe ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.` 
  console.log(logString);
}

let noun = readline.question("Enter a noun: ");

let verb = readline.question("Enter a verb: ");

let adjective = readline.question("Enter an adjective: ");

let adverb = readline.question("Enter an adverb: ");

madlibs(noun, verb, adjective, adverb);