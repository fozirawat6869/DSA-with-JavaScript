function findTheFirstNonRepeatingCharacter(s) {
   
    // const firstElement=s[0];

    for (let i = 0; i < s.length; i++) {
        let isRepeating = false;
        
        for(let j=0; j < s.length; j++) {
          
            if(s[i]=== s[j] && i !== j) {
                isRepeating = true;
                break;
            }

        }
        if(!isRepeating) {
            console.log(s[i]);
            return s[i];
        
        }


}
}


findTheFirstNonRepeatingCharacter("etcode"); // Output: "l"