function sumOfIntegers(limit, divisor) {
  let sum = 0;
  for (let currNum = divisor; currNum <= limit; currNum += divisor) {
    sum += currNum;
  }
  return sum;
}

function multisum(num) {
  let sum = sumOfIntegers(num, 3) + sumOfIntegers(num, 5)
            - sumOfIntegers(num, 15);
  console.log(sum);
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168