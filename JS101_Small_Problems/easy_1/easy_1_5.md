- Problem
  - input:
    - bill amount in dollars
    - tip rate in %
    - ignore input validation
  - output:
    - tip amount in dollars
    - total bill in dollars

- Examples
  - bill = 100, tip rate = 20
    tip = 20, total bill = 120

- Data: Number
- Algorithm:
  - get bill amount and tip percentage from user
  - calculate tip amount:
    - tip amount = bill * tip rate / 100
  - calculate total amount:
    - total amount = bill + tip
  - display:
    - The tip is $30.00
    - The total is $230.00