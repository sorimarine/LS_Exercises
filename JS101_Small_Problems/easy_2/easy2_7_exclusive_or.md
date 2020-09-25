Problem
- input: two args, call it (arg1, arg2)
- output:
 - returns true if only one of the args is truthy
 - false otherwise

 Examples given

 Algorithm:
 - set truthCount to 0
 - if arg1 is true, truthCount += 1
 - if arg2 is true, truthCount += 1
 - if truthCount is 1, return true
  - otherwise false