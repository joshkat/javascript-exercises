let punctuation = ['!', '.', ',', ' '];

const palindromes = function (string) {
    string = string.toLowerCase();
    var replacementString = '';
    var potentialPalindrome = '';

    for(i=0; i<string.length; i++){
        if(punctuation.includes(string.charAt(i))) continue;
        replacementString = replacementString + string.charAt(i);
    }

    for(i=replacementString.length; i>=0; i--){    //run through string backwards
        // if(punctuation.includes(string.charAt(i)))  continue;
        potentialPalindrome = potentialPalindrome + replacementString.charAt(i);
    }
    if(potentialPalindrome === replacementString) return true;
    return false;
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;
