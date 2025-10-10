const reverseString = function(string) {
    let arr=string.split('');
    let invertedArray=[];
    for (let i=arr.length;i>=0;i--){
        invertedArray.push(arr[i])
    }
    return(invertedArray.join(''))
};

// Do not edit below this line
module.exports = reverseString;
