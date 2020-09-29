function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam') === true);
console.log(isPalindrome('Madam') === false);
console.log(isPalindrome("Madam i'm adam") === false);
console.log(isPalindrome('356653') === true);