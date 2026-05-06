function checkGivenNoisExistinAGivenArrayOrNot(arr,num){
//    first way 
    for(let i=0;i<arr.length;i++){
           if(arr[i]===num){
            return true
           }
       }
         return false


 //   second way
    //  return arr.includes(num) 
    } 
console.log(checkGivenNoisExistinAGivenArrayOrNot([1,2,3,4,5],5)) // true
console.log(checkGivenNoisExistinAGivenArrayOrNot([1,2,3,4,5],6)) // false
