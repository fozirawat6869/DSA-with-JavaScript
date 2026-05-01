function isPalindrome(str){
     let strr=str.toLowerCase()
     let reverseStr=''
    for(let i=0;i<str.length;i++){
    reverseStr=strr.toLowerCase().split("").reverse().join('')
    }

    if(strr===reverseStr){
        return true
    }else return false
}


console.log(isPalindrome("Mayur"))
console.log(isPalindrome("Madam"))
