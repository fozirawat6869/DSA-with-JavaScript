let str = "abcdbea";

let answer = "";

for (let i = 0; i < str.length; i++) {

    for (let j = i + 1; j < str.length; j++) {

        if (str[i] === str[j]) {
            answer = str[i];
            break;
        }
    }

    if (answer !== "") {
        break;
    }
}

console.log(answer);