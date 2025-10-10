const removeFromArray = function(arr) {
    let filterArray=[]
    for (let i=1;i<=arguments.length;i++){
        filterArray.push(arguments[i]);
    }
    let result = arr.filter((item) => !filterArray.includes(item))
    return (result);
};

// Do not edit below this line
module.exports = removeFromArray;
