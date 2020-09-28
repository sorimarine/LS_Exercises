problem:
- input: (Number representing length of fibonacci number) call it (length)
- output: return the index of the first finbonacci number of that length's digits
- assume input will always be 2 or higher

example:
- input: 2
 - output: 7
- input: 10
 - output: 45
- input: 16
 - output: 74

structure: while loop

aglorithm:
- set index = 7
- set currFib = 13
- while currFib < 10 ** (length - 1):
 - set tempFib = currFib
 - set currFib = prevFib + currFib
 - set prevFib = tempFib
 - increment index count
- return index count