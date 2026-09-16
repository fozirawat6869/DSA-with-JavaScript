function missingNumbers(arr) {
    let smallest = arr[0];
    let largest = arr[0];
    let missingFound = false;

    // Find smallest and largest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }

        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    // Find missing numbers
    for (let i = smallest; i <= largest; i++) {
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

missingNumbers([15, 4, 5, 6, 7, 10]);
