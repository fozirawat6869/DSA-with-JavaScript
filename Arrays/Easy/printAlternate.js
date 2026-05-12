

// 👉 Print alternates means printing the first, third, fifth, etc. elements by skipping second, fourth, sixth, etc. elements each time.


function printAlternate(arr) {

    let result=[]

    for(let i = 0; i < arr.length; i +=2) {
        result.push(arr[i])
    }
    return result

}

console.log(printAlternate([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [1, 3, 5, 7, 9]
