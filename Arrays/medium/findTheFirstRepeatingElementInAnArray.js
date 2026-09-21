let arr = [10, 5, 3, 4, 3, 5, 6];

let found = false;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log(arr[i]);
      found = true;
      break;
    }
  }

  if (found) {
    break;
  }
}
