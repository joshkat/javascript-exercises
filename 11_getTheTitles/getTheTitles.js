const getTheTitles = function(books) {
    var returnArray = new Array();
    for(i=0; i<books.length; i++){
        returnArray[i] = books[i].title;
    }
    return returnArray;
};

// Do not edit below this line
module.exports = getTheTitles;
