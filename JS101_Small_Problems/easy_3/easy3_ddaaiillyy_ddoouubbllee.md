Problem
- input: (String) call it (string)
- output: (String) with all consecutive duplicate characters collapsed into a single character

Examples:
- in: "ssoorim saam"
 - out: "sorim sam"
- in: "bbbbbbbbbbbbbbb"
 - out: "b"
- in: ""
 - out: ""
- in: "a"
 - out: "a"

Data Structures: Array of characters

Algorithm:
- split string into charArray
- iterate over charArray and remove duplicate neighbors
 - set currChar = ''
 - set index = 0
 - while index < charArray.length:
  - if currChar === charArray[index]:
   - splice off charArray[index]
  - else:
   - set currChar = charArray[index]
  increment index by 1
- return string