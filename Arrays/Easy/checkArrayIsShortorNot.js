

/* A sorted array is an array where elements are arranged in either increasing or decreasing order
 without breaking the sequence.  */

function checkArrayisShortorNot(num){

    for(let i=0;i<num.length;i++){
        if(num[i]>num[i+1]){
            return false
        }
       }
     return true
}

console.log(checkArrayisShortorNot([1,2,3,4,5]))  // true