const repeatString = function(string, num) {
    if (num > 0) {
        let repeatedString = string;

        for (let i = 1; i < num; i++) {
            repeatedString = repeatedString + string;
        }

        return repeatedString;
    }
    
    else if (num == 0) {
        return '';
    }
    
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
