const repeatString = function(string, num) {
    let newString = '';
    while(num!=0){
        newString += string;
        num--;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
