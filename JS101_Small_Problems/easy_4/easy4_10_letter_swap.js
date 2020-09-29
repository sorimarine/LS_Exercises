function swap(string) {
  let wordsArray = string.split(' ');
  let swappedArray = wordsArray.map(word => {
    if (word.length < 2) {
      return word;
    }
    return word[word.length - 1] + word.slice(1, -1) + word[0];
    });
  return swappedArray.join(' ');
}

console.log(swap('This is what I want'));
console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));