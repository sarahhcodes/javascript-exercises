const removeFromArray = function(workingArray, ...elements) {
    for (const element of elements) {
        for (let i = 0; i < workingArray.length; i++) {
            if (workingArray[i] === element) {
                workingArray.splice(i,1);
            }
        }
    }

    return workingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
