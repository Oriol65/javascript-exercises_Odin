function determineOldest(a,b){
    //Assume that everyone is alive
    const aBirth = a.yearOfBirth;
    const bBirth = b.yearOfBirth;
    let aDeath = 2025;
    let bDeath = 2025;
    // if there is a year of death change it to that
    if(a.yearOfDeath){
        aDeath= a.yearOfDeath
    }
    if (b.yearOfDeath){
        bDeath=b.yearOfDeath
    }
    //find out age and return
    let aAge=aDeath-aBirth
    let bAge = bDeath-bBirth
    if (aAge>bAge){
        return(-1)
    } else {
        return(1)
    }
}

const findTheOldest = function(obj) {

    oldest = obj.sort((a,b) => determineOldest(a,b))
    return(oldest[0])
};

// Do not edit below this line
module.exports = findTheOldest;
