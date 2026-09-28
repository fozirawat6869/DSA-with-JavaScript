let str = "hello world javascript";

let result = "";
let word = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    word = word + str[i];
  } else {
    result = word + " " + result;
    word = "";
  }
}

// add the last word
result = word + " " + result;

// remove the extra space at the end
let finalResult = "";

for (let i = 0; i < result.length - 1; i++) {
  finalResult = finalResult + result[i];
}

console.log(finalResult);
