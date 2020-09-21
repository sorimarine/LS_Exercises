function extractLangage(localeString) {
  return localeString.slice(0, 2);
}

function greet(isoCode) {
  switch (isoCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Ola!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    default: return 'ISO 639-1 language code invalid';
  }
}

function extractRegion(localeString) {
  return region = localeString.split('_')[1].split('.')[0];
}

function localGreet(localeString) {
  switch (extractRegion(localeString)) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(extractLangage(localeString));
  }
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));

console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));