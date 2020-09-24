Problem
- input:
  - an integer greater than 0
  - a string 's' or 'p'
- output:
  - if 's':
    - sum of all integers between 1 and the entered integer, inclusive
  - if 'p':
    - product of all integers between 1 and the entered integer, inclusive

Examples
  - input: 1, 's'
    - output: 1
  - input: 5, 's'
    - output: 9
  - input: 5, 'p'
    - output: 120

Data: Number

Algorithm:
  - get integer from user
  - get string from user
  - if string is 's':
    - calculate sum of all integers between 1 and the entered integer
      - if integer is 1, return 1
      - else return integer + sumOfIntegers(integer - 1)
  - if string is 'p':
    - calculate product of all integers between 1 and the entered integer
      - if integer is 1, return 1
      - else return integer * productOfIntegers(integer - 1)
