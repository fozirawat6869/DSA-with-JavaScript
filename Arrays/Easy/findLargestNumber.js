function findLargestNumber(num){

    let max=num[0]
   
    for (let i=0;i<num.length;i++){
        if(num[i]>max){
            max=num[i]
        }
    }

console.log(max)
}

findLargestNumber([1,11,10,4]) // 11





