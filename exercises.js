// Write a program that does the following:
//
// Generate a random decimal number between 0 and 100 (EG: 93.60745257237626) and store it in a variable.
var randomNum = Math.random() * 100

console.log(randomNum)

// Round the number to the nearest integer (EG: 94)
var roundNum = Math.round(Math.random() * 100)

console.log(roundNum)
// Round the number up to the next largest integer (EG: 94)
var ceilNum = Math.ceil(Math.random() * 100)

console.log(ceilNum)
// Round the number down to the next smallest integer (EG: 93)
var floorNum = Math.floor(Math.random() * 100)

console.log(floorNum)
// Print all four numbers out with labels.
console.log('Random Number:' + randomNum)
console.log('Rounded Number:' + roundNum)
console.log('Ceiling Number:' + ceilNum)
console.log('Floor Number:' + floorNum)
// Write JavaScript code that generates a random integer in the range -10 to 10.
var possibleNegativeNum = Math.round((Math.random() * 20) - 10)

console.log(possibleNegativeNum)
