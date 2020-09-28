function findFibonacciIndexByLength(length) {
  let minNum = 10 ** (length - 1);
  
  // since we're assuming input is positive integer >= 2
  let index = 7;
  let currFib = 13;
  let prevFib = 8;
  
  while (currFib < minNum) {
    let tempFib = currFib;
    currFib += prevFib;
    prevFib = tempFib;
    index += 1;
  }
  
  console.log(typeof(currFib));
  console.log(index);
  return index;
}

findFibonacciIndexByLength(2);
findFibonacciIndexByLength(10);
findFibonacciIndexByLength(16);
findFibonacciIndexByLength(20);
findFibonacciIndexByLength(21);
findFibonacciIndexByLength(50);
findFibonacciIndexByLength(1000);