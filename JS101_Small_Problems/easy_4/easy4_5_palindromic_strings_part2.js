function isRealPalindrome(string) {
  //let cleanStringArray = string.toLowerCase().match(/[a-z0-9]/g);
  let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(cleanString);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isRealPalindrome('madam') === true);
console.log(isRealPalindrome("Madam, I'm Adam") === true);
console.log(isRealPalindrome('Madam') === true);
console.log(isRealPalindrome('356653') === true);
console.log(isRealPalindrome('356a653') === true);
console.log(isRealPalindrome('123ab321') === false);