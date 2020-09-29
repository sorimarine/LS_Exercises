function wordSizes(string) {
  let wordsArray = string.split(' ');
  let reducer = (sizeCounts, currWord) => {
    if (sizeCounts[currWord.length]) {
      sizeCounts[currWord.length] += 1;
    } else if (currWord.length > 0) {
      sizeCounts[currWord.length] = 1;
    }
    return sizeCounts;
  };
  return wordsArray.reduce(reducer, {});
}

console.log(wordSizes('This thing is a sentence. And this is another.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes('Four score and seven.'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));