function isPositive(num){

    if(isNaN(num)){
    console.log("invalid input")
}else{
    if(num>0){
        console.log("It is positive")
        for(let i=1;i<=num;i++){
            console.log(i)      
        }
    }else{
        console.log("type a positive no")
    }
}

}

isPositive(5)