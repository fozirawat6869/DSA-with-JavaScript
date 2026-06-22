function firstRepeatingChar(s) {
  let seen = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (seen.indexOf(char) !== -1) {
      return char; // first repeating character found
    }

    seen += char;
  }

  return "No repeating character";
}

console.log(firstRepeatingChar("abcdea"));



// 📌 Simple logic
// Expression	Meaning
// indexOf(char) === -1	Not found
// indexOf(char) !== -1	Found