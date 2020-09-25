function multiply(num1, num2) {
  let prod = num1 * num2
  console.log(prod);
  return prod;
}

function square(num) {
  return multiply(num, num);
}

square(5);
square(-8);