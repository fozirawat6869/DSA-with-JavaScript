


function reverseArray(num){
  
 let reverseArray=[]

//   reverse an array with unshift method
 for(let i=num.length-1;i>=0;i--){
     reverseArray.push(num[i])
 }
 
//  reverse with push method 
//   for(let i=0;i<num.length;i++){   
//    reverseArray.unshift(num[i])
//  }

 console.log(reverseArray)


}

reverseArray([1,4,5,6,7,10])  // [ 10, 7, 6, 5, 4, 1 ]



