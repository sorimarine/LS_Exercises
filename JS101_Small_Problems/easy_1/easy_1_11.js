function asciiValue(string) {
  let sum = 0;
  for (let index = 0; index < string.length; index += 1) {
    sum += string.charCodeAt(index);
  }
  console.log(sum);
  return sum;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0