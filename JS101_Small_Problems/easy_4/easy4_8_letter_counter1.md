Problem
- input: a string consisting of zero or more space separated words
- output: returns an object that shows the number of words of different sizes


Examples:
- in: 'This thing is a setence. And this is another.'
- out: { 4: 2, 5: 1, 2: 2, 1: 1, 8: 2, 3: 1 }

Data: Array of words, with string.split(' ')
      Object to store number of letters and amount of words

Algorithm:
- split string into wordsArray with split(' ')
- iterate with reduce:
 - if current.length is in accumulator (starts with {}):
  - incremement accumulator[current.length] by one
 - else:
  - set accumulator[current.length] = 1
 - return accumulator
- return object produced with reduce