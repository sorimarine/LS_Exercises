problem
- input: (number representing year) call it (year)
- output: string representing the century


Examples:
- (2000): "20th"
- (2001): "21st"
- (1965): "20th"
- (256): "3rd"
- (5): "1st"
- (10103): "102nd"

Algorithm:
- divide year by 100 and Math.ceil it, and we get the century number
- add appropriate ending
 - if last 2 digits are 11 - 19 or last digit is 0, 4 through 9:
  - add th
 - else if 1, add st
 - else if 2, add nd
 - else if 3, add rd

 - if last digit is 1,2 or 3, and 2nd to last digit is not 1:
  - add dict[last digit]
 - else:
  - add th 