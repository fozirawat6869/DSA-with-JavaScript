

function countEvenandOdd(num){

    let evenNo=[]
    let oddNo=[]

    for(let i=0;i<num.length;i++){
        if(num[i]%2===0){
            evenNo.push(num[i])  
        }else{
         oddNo.push(num[i])
        }
    }
    console.log("Even no : ",evenNo)
    console.log("Odd no : ",oddNo)
}

countEvenandOdd([1,2,3,4,5])