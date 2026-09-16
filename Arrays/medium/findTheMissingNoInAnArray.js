function missingNumbers(arr) {
    let n = arr[0];

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
            console.log(i);
        }
    }
}

missingNumbers([2, 5, 9]);