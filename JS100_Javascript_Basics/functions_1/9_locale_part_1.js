function extractLangage(localeString) {
  return localeString.slice(0, 2);
}

console.log(extractLangage('en_US.UTF-8'));
console.log(extractLangage('en_GB.UTF-8'));
console.log(extractLangage('ko_KR.UTF-16'));