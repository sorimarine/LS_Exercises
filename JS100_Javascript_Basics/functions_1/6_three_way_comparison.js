function compareByLength(string1, string2) {
  let toRet = 0;
  if (string1.length < string2.length) {
    toRet = -1;
  } else if (string2.length < string1.length) {
    toRet = 1;
  }
  console.log(toRet);
  return toRet;
}


compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0