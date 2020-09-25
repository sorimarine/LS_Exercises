Problem
- Input: Integer year greater than 0
- Output:
  - true if leap year
    - if year is divisible by 4
    - year not divisible by 100 unless divisiable by 400
  - false if not leap year

Examples given

Data: Number

Algorithm:
- if year % 4 === 0 and year % 100 !== 0 || year % 400 === 0