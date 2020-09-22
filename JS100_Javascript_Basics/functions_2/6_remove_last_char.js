function removeLastChar(string) {
  let moddedString = string.substring(0, string.length -1);
  console.log(moddedString);
  return moddedString;
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'