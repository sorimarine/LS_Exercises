Problem
input: - (positive integer) call it (n)
output: - logs a right triangle whose sides each have n stars. 
        - the right angle should be at the bottom right

examples given

Data structure: String

Algorithm:
- log (n-1) ' ' + '*'
- log (n-2) ' ' + 2 '*'
- log (n-3) ' ' + 3 '*'

- set counter to 1
- while counter <= n:
 - log (n - counter) ' ' + counter '*'