function findDifferenceBetweenLargestAndSmallest(arr) {
    let max='';
    let min=arr[0];

    for(let i=0;i<arr.length;i++){

        if(arr[i]>max){
            
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        
    }
    return max-min

}

console.log(findDifferenceBetweenLargestAndSmallest([1,2,3,4,10,9,5])) // 9
console.log(findDifferenceBetweenLargestAndSmallest([10,20,30,40,50])) // 40