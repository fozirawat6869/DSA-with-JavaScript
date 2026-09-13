let str = "Hello World JavaScript";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        result += "%20";
    } else {
        result += str[i];
    }
}

console.log(result);