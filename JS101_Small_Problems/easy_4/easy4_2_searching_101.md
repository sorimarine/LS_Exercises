problem
- input: get 6 numbers from user, call them num1 through num6
- output: log whether or not the 6th number appeared in the first five numbers

Data Structures: use array, and includes

Algorithm:
- set numArray = []
- prompt for numbers and push first 5 numbers into array
- set appearString = 'does not appear'
- if numArray.includes(num6):
 - set appearString to 'appears'
- set numsString = numArray.join(',')
- log (`The number ${num6} ${appearString} in ${numsString}.`)