const reverseString = function(sentence) {
    let reversedSentence = "";
    
    for (let i = sentence.length; i >= 0; i--) {
        reversedSentence += sentence.charAt(i);
    }

    return reversedSentence;
};

// Do not edit below this line
module.exports = reverseString;
