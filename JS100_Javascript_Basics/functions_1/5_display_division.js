function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree; // should be multiplesOfThree();

// the code will not log anything, but if we fix the function, call, it will be as below:
/*
3 / 1 = 3
6 / 2 = 3
9 / 3 = 3
12 / 4 = 3
15/ 5 = 3
18 / 6 = 3
21 / 7 = 3
24 / 8 = 3
27 / 9 = 3
*/