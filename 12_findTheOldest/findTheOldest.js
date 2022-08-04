const findTheOldest = function(people) {
    var oldestPerson = people[0];
    for(i=0; i<people.length; i++){
        if(getAge(oldestPerson) < getAge(people[i]))    {
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

function getAge(person){
    var age = 0;
    let currentYear = new Date().getFullYear();
    if('yearOfDeath' in person && 'yearOfBirth' in person){
        age = person.yearOfDeath - person.yearOfBirth;
        return age;
    }else{
        age = currentYear - person.yearOfBirth;
        return age;
    }
}

//1. run through list and compare each persons age, if person a
//  > person b keep going if person a < person b replace var w
// person b

const peoples = [
    {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      }
  ]

console.log(getAge(peoples[1]));


// Do not edit below this line
module.exports = findTheOldest;