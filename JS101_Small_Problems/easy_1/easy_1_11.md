Problem
- Input: string
- Output: sum of the ASCII values of every character in the string
 - use String.prototype.charCodeAt()

Examples given

Data: string is fine
 - use charCodeAt(indexOfString)

Algorithm:
 - set sum = 0
 - set index = 0
 - while index is less than length of string:
  - add string.charCodeAt(index) to sum
  - incrememnt index by 1
- return sum