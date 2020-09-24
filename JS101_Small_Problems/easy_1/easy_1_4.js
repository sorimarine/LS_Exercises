const readline = require('readline-sync');

const SQUARE_FEET_PER_SQUARE_METER = 10.7639;

let width;
let length;

function assignUserInput() {
  console.log('Enter the length of the room in meters:');
  length = Number(readline.question());

  console.log('Enter the width of the room in meters:')
  width = Number(readline.question());
}

assignUserInput();
let areaInSquareMeters = length * width;
let areaInSquareFeet = areaInSquareMeters * SQUARE_FEET_PER_SQUARE_METER;
console.log(`The area of the room is ${areaInSquareMeters} square meters` +
            ` (${areaInSquareFeet}).`);