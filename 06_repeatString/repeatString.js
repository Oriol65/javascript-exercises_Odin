const repeatString = function(string, num) {
    let i=0;
    let newS ='';
    if (num>=0){
        while (i<num){
        newS=newS+string;
        i++
        }
        return(newS)
    } else {
        return('ERROR')
    }

};

// Do not edit below this line
module.exports = repeatString;
