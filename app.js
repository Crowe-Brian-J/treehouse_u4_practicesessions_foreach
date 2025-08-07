/*
forEach Chanllenge Task 1

Directions:
Using forEach, add together all the elements in the numbers array, and store the total in the variable total.

Given code below:
*/

const numbers = [1, 2, 3, 4, 5]
let total = 0

// Write loop here:
numbers.forEach((number) => (total += number)) //Expected Result: 15

//So I can see the answer below
console.log(total)

/*
forEach Chanllenge Task 2

Directions:
Using forEach, copy only the first 2 characters of each string in the days array and store the abbreviations in the dayAbbreviations array.

Given code below:
*/

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
let dayAbbreviations = []

// dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
// Write your code below
days.forEach((day) => dayAbbreviations.push(day.substring(0, 2)))

console.log(dayAbbreviations)

/*
forEach Chanllenge Task 3

Directions:
Using forEach, turn the number strings from the stringPrices array into floats and add them all, storing the total in the variable priceTotal.

Given code below:
*/

const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70']
let priceTotal = 0

// priceTotal should be: 32.92
// Write your code below
stringPrices.forEach((price) => (priceTotal += parseFloat(price)))

console.log(priceTotal)

/*
forEach Chanllenge Task 4

Directions:
The split method turns a string into an array. In the case of alphabet below, each letter of the string is being turned into an element in an array by split. Using forEach, iterate over the alphabet array and store each letter in the array noel except for the L character.

Given code below:
*/

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
let noel = []

// noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Write your code below
alphabet.forEach((letter) => {
  if (letter !== 'L') {
    noel.push(letter)
  }
})

console.log(noel)

/*
forEach Chanllenge Task 5

Directions:
Using forEach, iterate over the percentages and store all percentages over 50 percent in the array upperRange.

Given code below:
*/

const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99]
let upperRange = []

// upperRange should be: [67, 90, 82, 99]
// Write your code below
percentages.forEach((percentage) => {
  if (percentage > 50) {
    upperRange.push(percentage)
  }
})

console.log(upperRange)
