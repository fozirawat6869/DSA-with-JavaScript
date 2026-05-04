function findTheLongestWordInASentence(s) {
  let words = s.split(" ");

  let maxLength = 0;
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }

  console.log("Length:", maxLength);
  console.log("Word:", longestWord);

  return longestWord;
}


console.log(findTheLongestWordInASentence("The quick brown fox jumps over the lazy dog"));