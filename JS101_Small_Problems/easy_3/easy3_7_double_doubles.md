Problem
- input: (number) call it (num)
- output: returns num * 2 if not a double double
          returns num as-if if it is a double double

Example:
- in: 37
 - out: 74
- in: 3333
 - out: 3333
- in : 450
 - out: 900
- in: 113311
 - out: 226622

Data: String

Algorithm:
- check if number is double num
 - convert num to string
 - check if first half of string === second half of string
  - use slice
- if it is, return num
- else return num * 2