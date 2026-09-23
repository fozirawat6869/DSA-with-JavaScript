
let arr = [3, 1, 2, 1, 2, 4,5,6,10];

let countSingle = 0;

for (let i = 0; i < arr.length; i++) {

    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count === 1) {
        console.log("Single element:", arr[i]);
        countSingle++;
    }
}

if (countSingle === 0) {
    console.log("No single element");
}