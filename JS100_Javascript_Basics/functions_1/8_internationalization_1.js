function greet(isoCode) {
  switch (isoCode) {
    case 'en': return 'Hi!'
    case 'fr': return 'Salut!';
    case 'pt': return 'Ola!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    default: return 'ISO 639-1 language code invalid';
  }
}
console.log(greet('en'));
console.log(greet('fr'));
console.log(greet('pt'));
console.log(greet('de'));
console.log(greet('sv'));
console.log(greet('af'));