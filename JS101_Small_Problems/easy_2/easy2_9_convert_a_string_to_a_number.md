Problem
- input: (string representing an integer) call it (numString)
- output: the integer(Number) represented by the string

Examples:
- input "542321"
 - output: 542321
- input "23"
 - output: 23

 Data Structures: Array of character strings

 Algorithm:
 - set numArrayReversed = stringArray.reverse().split('')
 - calculate the number value of each element in numArrayReversed and add them together
  - map each number => number * 10 ** index
  - reduce to get sum of numberValue
   - (acc, curr) => acc += curr, 0
 - return the sum