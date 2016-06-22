var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];


//Code Block 1) Iterate through the stringList and produce the following output:
//Months listed are March, April, May.
var months = stringList.join(' ');
console.log('Months listed are', months);

//Code Block 2) Console log the last element in numList using .length to find the last index
for (var i = 0; i < numList.length; i++) {
  var lastElem = numList[i]
}
console.log(lastElem);

//Code Block 3) Iterate through numList, output all numbers as single String
console.log(numList.join(''));

//Code Block 4) Iterate through numList and add all of the elements together and console log the total
var numSum = 0;

for (var i = 0; i < numList.length; i++) {
  numSum += numList[i];
}

console.log(numSum);

//Code Block 5) If the second element in boolList is true, log the sum of the first and last elements in
//numList. Otherwise multiply the second element in numList by itself and log the result.
var answer5 = 0

if (boolList[1] == true) {
  answer5 = numList[0] + numList[2];
}else {
  answer5 = numList[1] * numList[1];
}

console.log(answer5);

//Code Block 6) Iterate through boolList, if the value is true console log the equivelent index in numList.
var newNum = 0

for (var i = 0; i < boolList.length; i++) {
  if (boolList[i] == true) {
    newNum = numList[i]
  }
}

console.log(newNum);

//Code Block 7) Combine all three arrays into one array, and log the newly created are in reverse.
var combineArray = [];

function addToArray(array) {
  for (var i = 0; i < array.length; i++) {
    combineArray.push(array[i]);
  }
}

addToArray(stringList);
addToArray(numList);
addToArray(boolList);

console.log(combineArray.reverse());
