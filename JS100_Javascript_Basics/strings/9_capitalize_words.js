let string = 'launch school tech & talk';

function capWords(string) {
  // A little hard to read, but good test for mastery over these lessons
  return string.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}

console.log(capWords(string));