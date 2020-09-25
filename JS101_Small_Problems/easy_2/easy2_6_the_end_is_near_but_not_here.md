Problem
- input: (String) call it (string)
 - string contains at least 2 words
- output: the next-to-last word in the string

Examples
- input: "Sorim Sam"
 - output: "Sorim"
- input: "Oh how the dog went"
 - output: "dog"
- input: "last word"
 - output: "last"
- input: "Launch School is great!"
 - output: "is"

Data Structures:
 - Use array to store string.split(' ')

Algorithm:
 - set words array to string.split(' ')
 - return words[words.length - 2]