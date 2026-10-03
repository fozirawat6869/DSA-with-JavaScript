let arr = [5, 2, 8, 1, 3, 4, 7, 6];

let result = [];
let index = 0;

// First put even numbers
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    result[index] = arr[i];
    index++;
  }
}

// Then put odd numbers
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    result[index] = arr[i];
    index++;
  }
}

console.log(result);
