function majorityElement(arr) {

    let count = {};

    for (let num of arr) {

        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }

        if (count[num] > arr.length / 2) {
            return num;
        }
    }

    return -1;
}


// Test 1
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// Output: 2


// Test 2
console.log(majorityElement([1, 2, 3, 4, 5]));
// Output: -1