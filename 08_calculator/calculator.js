const add = function(numA, numB) {
  return numA+numB;
};

const subtract = function(numA, numB) {
	return numA - numB;
};

const sum = function(numArray) {
  var sum = 0;
	for(i=0; i<numArray.length; i++){
    sum = sum + numArray[i];
  }
  return sum;
};

const multiply = function(numArray) {
  var sum = 1;
	for(i=0; i<numArray.length; i++){
    sum = sum * numArray[i];
  }
  return sum;
};

const power = function(numA, numB) {
  var temp = numA;
	for(i=0; i<numB-1; i++){
    numA = numA * temp;
  }
  return numA;
};

const factorial = function(num) { //recursive factorial why not
	if(num == 0) return 1;
  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
