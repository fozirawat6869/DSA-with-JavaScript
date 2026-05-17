function isPositive(num){

    let factorial=1

    if(isNaN(num)){
    console.log("invalid input no")
}else{
    if(num>0){
        for(let i=1;i<=num;i++){  
            factorial=factorial*i 
        }
        console.log(factorial)
    }else{
        console.log("type a positive no")
    }
}

}

isPositive(5)