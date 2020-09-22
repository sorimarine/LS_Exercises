isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
isBlank('mars blue')

function isBlank(string) {
  return !string.trim();
}