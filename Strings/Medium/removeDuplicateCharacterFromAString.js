function removeDuplicateCharacterFromAString(str) {

    // with Set and spread operator

    console.log("Input String: ", str)
  
    let result=[...new Set(str)].join('')    
  
    console.log("Output String: ", result)
   


    // with .includes() method   

    // let result='';

    // for(let i=0; i<str.length; i++){
    //      if(!result.includes(str[i])){ 
    //         result+=str[i] 
    //      }
    // }
    // console.log("Output String: ", result)
}

removeDuplicateCharacterFromAString("hhello"); 
