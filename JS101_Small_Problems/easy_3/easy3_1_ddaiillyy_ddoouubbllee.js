function crunch(string) {
  let charArray = string.split('');
  // JavaScript returns undefined for attemps to access out of bounds indices
  let dupesRemoved = charArray.filter((element, index) =>
                  element !== charArray[index - 1]);
  return dupesRemoved.join('')
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""