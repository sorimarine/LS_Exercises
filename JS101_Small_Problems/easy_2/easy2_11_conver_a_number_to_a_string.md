Problem
- input: (integer value) call it (integer)
- output: string representing the integer
- can't use built-in functions

Examples
- input: 2351
 - output: "2351"
- iput: 523
 - output: "523"

Data Structures: Array to store digit string

Algorithm:
- define DIGIT_VALUE array
- set stringValue = 0
- get remainder of appropriate power of 10 and add to beginning of stringValue
 - set remainder = 2351 % 10
 - stringValue = remainder + stringValue
 - set value = Math.floor(value / 10)
 - continue while value is greater than 0 


 - 2351
  - string = ''
  - '1' = 2351 % 10
  - '5' = 235 % 10
  - '3' = 23 % 10
  - 2 = 2 % 10