Problem
- Input:
  - string1
  - string2
  - assume strings have different lengths
- output:
  - shorter string + longer string + shorter string (call it shortLongShort)

Examples:
  - Input:
    - string1 = 'Jon'
    - string2 = 'mackoy'
    - output: 'JonmackoyJon'
  - Input:
    - string1 = 'Johanson'
    - string2 = 'does'
    - output: 'doesJohansondoes'

Data: String

Algorithm:
- get string1 from user
- get string2 from user
- if string1 is shorter than string2:
  - output: string1 + string2 + string1
- else:
  - output: string2 + string1 + string2