const removeFromArray = function(array, removeMe) {
    for(i=0; i<array.length; i++){
       if(array[i] == removeMe)    array.splice(i,1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
