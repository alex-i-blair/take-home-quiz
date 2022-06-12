//Assuming that all spaces are separating words without punctuation or non letter characters (except for apostrophes/contractions). Assuming same formatting as example in email including descending sort, lowercase, and line spacing. Assuming this function doesn't need a guard against running repeatedly which starts to grow with numbers as keys as well. Using vanilla javascript.

const text = fs.readFileSync('./text-to-count.txt', 'utf-8');
const wordArr = text.split(' ');

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
countWords(wordArr);
