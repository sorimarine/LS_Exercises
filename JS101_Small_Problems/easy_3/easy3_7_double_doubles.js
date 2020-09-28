function isDoubleDouble(num) {
  let numString = String(num);
  let middleIndex = Math.floor(numString.length / 2);
  return numString.slice(0, middleIndex) === numString.slice(middleIndex);
}

function twice(num) {
  return isDoubleDouble(num) ? num : num * 2;
}

console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);