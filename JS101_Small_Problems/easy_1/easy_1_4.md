- Problem
  - input:
    - length in meters (string)
    - width in meters (string)
    - do not validate input
  - output:
    - area of the room in square meters
    - area of the room in square feet
  - given:
    - 1 square meter = 10.7639 square feet

- Examples
  - length = 8, width = 9:
    - area = 72.00 square meters
    - area = 775.00 square feet

- Data:
  - Number for calculation
  - string for input and display

- Algorithm
  - get length and with from user
    - prompt user for length input and convert to number
    - prompt user for width input and conver to number
  - calculate area in square meters
    - area in meter = length * width
  - calculate area in feet
    - area in feet = area in meter * 10.7639
  - display results
    - The area of the room is ##.## square meters (###.## square feet).