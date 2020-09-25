function xor(arg1, arg2) {
  let truthCount = 0;
  if (arg1) {
    truthCount += 1;
  }
  if (arg2) {
    truthCount += 1;
  }
  return (truthCount === 1);
}

// tests
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);