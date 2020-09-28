function century(year) {
  let centuryNum = Math.ceil(year / 100);
  return centuryNum + getEnding(centuryNum);
}


function getEnding(centuryNum) {
  const SPECIAL_ENDS = {
    1: 'st',
    2: 'nd',
    3: 'rd'
  };
  
  let lastDigit = centuryNum % 10;
  let secondToLastDigit = Math.floor((centuryNum % 100) / 10);

  let ending = 'th'
  if (SPECIAL_ENDS[lastDigit] && secondToLastDigit !== 1) {
    ending = SPECIAL_ENDS[lastDigit];
  }

  return ending;

}
century(2000);
century(2001);
century(1965);
century(256);
century(5);
century(10103);
century(1052);
century(1127);
century(11201);