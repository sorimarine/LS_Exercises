function repeat(times, string) {
  if (times <= 1) {
    return string;
  }
  return string + repeat(times - 1, string);
}

console.log(repeat(3, 'ha'));
console.log(repeat(6, 'ha'));
console.log(repeat(0, 'ha'));