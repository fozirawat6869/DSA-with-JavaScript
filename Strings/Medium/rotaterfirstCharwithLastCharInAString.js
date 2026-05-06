function rotateFirstCharWithLastChar(str) {

    if(str.length<=1) return console.log("To see the result, please enter a string with more than 1 character")

    let result=''

    for(let i=0;i<str.length;i++){
        if(str[i]===str[0]){
           result+=str[str.length-1]
        }else if(str[i]===str[str.length-1]){
            result+=str[0]
        }else{
            result+=str[i]
        }

    }

    console.log("Input String: ", str)
    console.log("Output String: ", result)
  
}

rotateFirstCharWithLastChar("hello");


