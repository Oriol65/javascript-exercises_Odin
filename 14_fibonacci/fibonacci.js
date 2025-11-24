const fibonacci = function(input) {
    const number = Number(input)
    if (number<0){
        return('OOPS')
    }
    if (number == 0){
        return(0)
    }
 
    let total = 1;
    let past = 0;

    for(let i=0; i< number-1; i++) {
        let middle = total;
        total = total + past;
        past = middle;
    }
    return (total)
};

// Do not edit below this line
module.exports = fibonacci;
