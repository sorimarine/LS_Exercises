Problem
- Input: (string) call it (name)
- Output:
 - if there's no ! on last index of name:
  - Hello {name}
 - if there is:
  - HELLO {name in caps}. WHY ARE WE SCREAMING?

Example:
- Input: Sorim
 - Output: Hello Sorim.
- Input: Sorim!
 - Output: HELLO SORIM. WHY ARE WE SCREAMING?

Data: String

Algorithm:
- prompt user to input name and read it
- set greeting to 'Hello {name}.'
- if name.endsWith('!'):
 - set greeting += greeting.toUpperCase() + 'WHY ARE WE SCREAMING?'
- log greeting to console