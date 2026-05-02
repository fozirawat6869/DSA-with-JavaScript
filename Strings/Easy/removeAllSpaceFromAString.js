function removeAllStringFromAString(str) {
     let result=""
     for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            result+=str[i]
        }
     }
     console.log(result)
}

removeAllStringFromAString("h e l l o")

