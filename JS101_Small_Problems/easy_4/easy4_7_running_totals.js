function runningTotal(numArray) {
  let totalsArray = []
  let reducer = (currentTotal, curr) => {
    currentTotal += curr;
    totalsArray.push(currentTotal);
    return currentTotal;
  }
  numArray.reduce(reducer, 0); 
  return totalsArray;
}

console.log(runningTotal([2,5,13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));