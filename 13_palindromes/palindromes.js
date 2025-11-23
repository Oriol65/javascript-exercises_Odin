const phrase = function (test){
    const lower = test.toLowerCase();
    console.log(lower)
    const replaced = lower.replace(/[,./<>?;':"!@& ]/g,'')
    console.log(replaced)
    return(replaced);
}
const palindromes = function (test) {
    const ptest = phrase(test);
    const len =ptest.length;
    console.log(len/2)
    for (let i=0; i<= len/2; i++){
        const j= len-1-i;
        if (ptest[i] != ptest[j]){
            return(false)  
        }
    }
    return(true)
};


// Do not edit below this line
module.exports = palindromes;
