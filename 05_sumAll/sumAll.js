const sumAll = function(num1, num2) {
    let final = 0;
    if(num1 > num2){
        final = num1;
        num1 = num2;
        num2 = final;
        final = 0;
    }

    if(num1<0 || num2<0){
        return "ERROR";
    }

    if(typeof num1 === 'string' || typeof num2 === 'string'){
        return "ERROR";
    }

    if(Array.isArray(num1) || Array.isArray(num2)){
        return "ERROR";
    }

    while(num1 <= num2){
        final = final + num1;
        num1++;
    }
    return final;
};

console.log(sumAll(1,3))


// Do not edit below this line
module.exports = sumAll;
