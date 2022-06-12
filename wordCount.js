//Assuming that all spaces are separating words without punctuation or non letter characters (except for apostrophes/contractions). Assuming same formatting as example in email including descending sort, lowercase, and line spacing. Assuming this function doesn't need a guard against running repeatedly which starts to grow with numbers as keys as well. Using vanilla javascript.

function countWords(array) {
  // Using forEach to iterate over words in the text array and convert them into lowercase for evaluation. If word is key in wordCount object, then increment value by 1 otherwise make a {key: value} pair {word: 1} in wordCount object
  const wordsCount = {};
  array.forEach((word) => {
    word = word.toLowerCase();
    wordsCount[word] ? (wordsCount[word] += 1) : (wordsCount[word] = 1);
  });
  console.log(wordsCount);
  return wordsCount;
}

function sortWordsByFrequency(object) {
  //using forEach and fs.appendFileSync to iterate over the array of [key: value] pairs and append them with ordering intact to the file with pathname of filePath
  const sortedWords = Object.entries(object).sort(([, a], [, b]) => b - a);
  console.log('sortedWords :>> ', sortedWords);
  return sortedWords;
}

function appendCountsToFile(array, filePath) {
  array.forEach((word) => {
    const wordCount = `${word[0]} ${word[1]}`;
    fs.appendFileSync(filePath, '\n\n' + wordCount, (error) => {
      if (error) throw error;
    });
  });
}

function countWordsAndAppendTotals(filePath) {
  const text = fs.readFileSync('./text-to-count.txt', 'utf-8');
  const wordArr = text.split(' ');

  const countObj = countWords(wordArr);
  const sortedWords = sortWordsByFrequency(countObj);
  appendCountsToFile(sortedWords, filePath);
}
