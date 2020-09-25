function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("Sorim Sam") === "Sorim");
console.log(penultimate("Oh how the dog went") === "dog");
console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!") === "is");