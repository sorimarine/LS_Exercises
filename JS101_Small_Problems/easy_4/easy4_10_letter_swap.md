Problem
in: String of words separated by spaces, call it string
out: swap the first and last letter of every word

Examples:
- in: 'This is what I want'
 - out: 'shiT si thaw I tanw'
- in: 'Oh what a wonderful day it is'
 - out: 'hO thaw a londerfuw yad ti si'
- in: 'Abcde'
 - out: 'ebcdA'
- in: 'a'
 - out: 'a'

 Data structures: Array and String

 Algorithm:
 - use string.split(' ') to split string in to wordsArray
 - map each word in array:
  - word => word[-1] + word[1,-2], + word[0]
 - return wordsArray.join(' ') 