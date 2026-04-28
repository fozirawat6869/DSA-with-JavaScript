function secondLargestNOInArray(num){

  let largest=[num[0]]  
let secondLargest=-Infinity

  for(let i=0;i<num.length;i++){
      if(num[i]>largest){
        secondLargest=largest
        largest=num[i]
      }else if(num[i] < largest && num[i] > secondLargest){
      secondLargest = num[i]
    }
  }
  return secondLargest

}

console.log(secondLargestNOInArray([5,2,10,8,6])) // 8