// 👉 Natural numbers are the set of positive counting numbers starting from 1.
function sumForNNaturalNumbers(n) {
      let sum=0
      let count=[]
    for(let i=1;i<=n;i++){
       sum+=i 
       count.push(i)
   }
   console.log(count,"=",sum)
}

sumForNNaturalNumbers(5)