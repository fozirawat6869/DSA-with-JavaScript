function moveAllZeroAtEnd(num){

    let result=[]    

  for(let i=0;i<num.length;i++){
     
    if(!num[i]==0){
        result.push(num[i])
    } 
  }

  for(let j=0;j<num.length;j++){
        if(num[j]==0){
            result.push(num[j])
        }
    }
  console.log(result)

}

moveAllZeroAtEnd([1,2,0,3,0,5])  // [ 1, 2, 3, 5, 0, 0 ]