function countHowManyTimesACharacterAppearsInAString(str) {

    let checked = ""

   for(let i=0;i<str.length;i++){

    if(checked.includes(str[i])){
        continue
    }
       
    let count =0
        for(let j=0;j<str.length;j++){

            if(str[i]===str[j]){
               count++
            }
        }
       
        if(str[i]==" "){
            console.log(`" " - ${count}`)
        }else{
            console.log(`${str[i]}   - ${count}`)
        }
        checked+=str[i]
   }
  


}

countHowManyTimesACharacterAppearsInAString("hello world")