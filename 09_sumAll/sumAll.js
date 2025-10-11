const sumAll = function(a,b) {
    let result = 0;
    if (a<0 || b<0 || !Number.isInteger(a+b)){
        return('ERROR');
    } else if (a>b){

        return (sumElements(b,a));
    } else {

        return (sumElements(a,b));
    }
};
function sumElements (min,max){
    let result=0;
    for (let i=min; i<=max; i++){
        result=result+i;
    }
    return (result)
}
// Do not edit below this line
module.exports = sumAll;
