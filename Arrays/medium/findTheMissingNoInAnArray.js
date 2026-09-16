function missingNumbers(arr) {
  let n = arr[0];
  let missingFound = false;

  // Find largest number
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > n) {
      n = arr[i];
    }
  }

  // Find missing numbers
  for (let i = arr[0]; i <= n; i++) {
    let found = false;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }

    if (!found) {
      console.log("Missing:", i);
      missingFound = true;
    }
  }

  if (!missingFound) {
    console.log("No missing numbers");
  }
}

missingNumbers([3, 4, 5, 6, 7, 10]);
