function randomAge(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

console.log(`Teddy is ${randomAge(20, 120) } years old!`);