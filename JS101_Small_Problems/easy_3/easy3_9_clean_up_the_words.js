function cleanUp(string) {
  let cleanString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (isAlphabet(string[index])) {
      cleanString += string[index];
    } else {
      let nextChar = string[index + 1];
      while (nextChar && !isAlphabet(string[index + 1])) {
        index += 1;
      }
      cleanString += ' ';
    }
  }

  return cleanString;
}

function isAlphabet(char) {
  let loweredChar = char.toLowerCase();
  return loweredChar >= 'a' && loweredChar <= 'z';
}

console.log(cleanUp("---what's my +*& line?"));