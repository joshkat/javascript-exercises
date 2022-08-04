const caesar = function(string, shiftAmount) {
    let notAllowedChars = new Array();
    var newString = '';
    var asciiNum = 0;

    var num = 0;
    for(i=32; i<65; i++){   //fills with ascii from 32-64
        notAllowedChars[num] = i;
        num++;
    }
    for(i=91; i<97; i++){   //fills with ascii from 91-97
        notAllowedChars[num] = i;
        num++;
    }

    if(shiftAmount >= 0){
        for(i=0; i<string.length; i++){ //this will loop around init string for positive shiftamt
            asciiNum = parseInt(string.charCodeAt(i));
            if(notAllowedChars.includes(asciiNum)){
                newString = newString + String.fromCharCode(asciiNum);
                continue;
            }
            if(string.charAt(i).toUpperCase() === string.charAt(i)){    //uppercase check
                for(j=0; j<shiftAmount; j++){
                    asciiNum++;
                    if(asciiNum>90) asciiNum = 65;
                }
            }
            if(string.charAt(i).toLowerCase() === string.charAt(i)){    //lowercase check
                for(j=0; j<shiftAmount; j++){
                    asciiNum++;
                    if(asciiNum>122) asciiNum = 97;
                }
            }
            newString = newString + String.fromCharCode(asciiNum);
        }
    }
    if(shiftAmount < 0){
        for(i=0; i<string.length; i++){ //this will loop around init string for positive shiftamt
            asciiNum = parseInt(string.charCodeAt(i));
            if(notAllowedChars.includes(asciiNum)){
                newString = newString + String.fromCharCode(asciiNum);
                continue;
            }
            if(string.charAt(i).toUpperCase() === string.charAt(i)){    //uppercase check
                for(j=shiftAmount; j<0; j++){
                    asciiNum--;
                    if(asciiNum<65) asciiNum = 90;
                }
            }
            if(string.charAt(i).toLowerCase() === string.charAt(i)){    //lowercase check
                for(j=shiftAmount; j<0; j++){
                    asciiNum--;
                    if(asciiNum<97) asciiNum = 122;
                }
            }
            console.log(asciiNum);
            newString = newString + String.fromCharCode(asciiNum);
        }
    }
    return newString;
};

//1. check if the letter is lowercase or uppercase
//2a. if lower use lowercase forloop to one by one add and wraparound, so that if ascii[x]>122 set ascii back to 97
//2b. if upper use uppercase forloop to one by one add and wraparound, so that if ascii[x]>80 set ascii back to 65
//3. convert back to string and add it to final string
// Do not edit below this line
module.exports = caesar;
