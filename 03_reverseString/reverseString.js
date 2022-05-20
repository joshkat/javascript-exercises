const reverseString = function(string) {
    let char1 = string.charAt(0);
    let newString = '';
    for(j=string.length; j>=0; j--){
        newString = newString + string.charAt(j);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
