// A leader is an element that is greater than all elements on its right side in the array. The rightmost element is always a leader. We need to find all the leaders in the given array.

function leadersInArray(arr) {
   
    let leaders = [];
    let n=arr.length

    for(let i=0;i<n;i++){
        let j;
        for(j=i+1;j<n;j++){
            // console.log(arr[j])
             if(arr[i]<arr[j]){
                break
             }
        } 
        if(j===n){
           leaders.push(arr[i]) 
        }
        // leaders.push(arr[i])
    }
   
    console.log(leaders)
}

leadersInArray([16, 17, 4, 3, 5, 2]); // Output: [17, 5, 2]


// If no bigger element is found on the right side, then the loop finishes completely, and j reaches n.

// In your example:

// n = 6

// so j finally becomes:

// j = 6

// That is why:

// if(j === n)