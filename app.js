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
