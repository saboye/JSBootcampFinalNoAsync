/* eslint-disable no-param-reassign */
function mostVowels(str) {
  const words = str.split(" ");
  let mostVowelsWord = "";
  let mostVowelsCount = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let vowelsCount = 0;

    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if ("aeiouAEIOU".includes(char)) {
        vowelsCount++;
      }
    }

    if (vowelsCount > mostVowelsCount) {
      mostVowelsCount = vowelsCount;
      mostVowelsWord = word.toLowerCase();
    }
  }

  return mostVowelsWord;
}

module.exports = { mostVowels };
