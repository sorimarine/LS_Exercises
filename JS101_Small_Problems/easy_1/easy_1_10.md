- Input: integer, call it num
- Output: sum of all numbers between 1 and num, inclusive that are multiples of 3 OR 5;

Examples given

Data: Number

Algorithm:
- calculate sum of integers divisible by 3
 - use sumOfIntegers function that takes in limit, and numDivisible
  - set sum = 0, currNum = numDivisible
  - while currNum is less than limit:
    - add currNum to sum
    - increment currNum by numDivisible
  - return sum
- calculate sum of integers divisible by 5
  - use sumOfIntegers function on 5
- add both sums and return result