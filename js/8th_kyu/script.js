// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow=x=> x.reduce((a,b) => a*b);

// function grow(x){
//     return x.reduce((acc, c) => acc*c);
//   }
//------------------------------------------------------------------
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. Array can contain numbers or strings. X can be either.Return true if the array contains the value, false if not.

function check(a, x) {
    // your code here
    return a.includes(x)
}
//------------------------------------------------------------------
//You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero, ensures removal of negative elements
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}
//--------------------------------------------------------------------
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}
//-----------------------------------------------------------------
// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// if both characters are letters, but not the same case, return 0
function sameCase(a, b){
  if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
    }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
        return 1
    }else{
    return 0
    }
}
//------------------------------------------------------------------
// Write a function that removes the spaces from the string, then return the resultant string.
// Examples:
// Input -> Output
// "8aaaaa dddd r     " -> "8aaaaaddddr"
function noSpace(x){
  return x.replaceAll(' ', '');
}
//------------------------------------------------------------------
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
function basicOp(operation, value1, value2){
  if (operation == '+'){
    return value1 + value2;
  }else if(operation == '-'){
    return value1 - value2;
  }else if(operation == '*'){
    return value1 * value2;
  }else if(operation == '/'){
    return value1 / value2;
  }else{
    return 0;
  }
}
// -same thing, just ternary
function basic(operation, val1, val2){
  return operation == '+' ? val1 + val2 :
   operation == '-' ? val1 - val2 :
    operation == '*' ? val1 * val2 :
     operation == '/' ? val1 / val2 :
      0;
}
//------------------------------------------------------------------
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
//------------------------------------------------------------------
// You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
function betterThanAverage(classPoints, yourPoints){
  return yourPoints > classPoints.reduce((acc, c) => acc + c, 0) / classPoints.length
}
//------------------------------------------------------------------
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
function findNeedle(haystack){
  if(haystack.includes('needle')){
   return `found the needle at position ${haystack.indexOf('needle')}`
  }
}
//------------------------------------------------------------------
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
function points(games) {
  let sum = 0;
  for(let i = 0; i < games.length; i++) {
    let a = games[i].split(':');
    if(a[0] > a[1]) {
      sum += 3;
    } else if(a[0] == a[1]) {
      sum += 1;
    } else { sum = sum } 
  }
  return sum;
}
//------------------------------------------------------------------
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
const summation = num => num * (1 + num) / 2
//------------------------------------------------------------------
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
  let answer = []; //initialize an array
  for(let i=n; i>0; i--){//loop down from n to 1
    answer.push(i);//push each i to the answer array
  }
  return answer;//output
}
//------------------------------------------------------------------
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.
String.prototype.toAlternatingCase = function () {
  //creating an array by wrapping in brackets as array literal so we can use the .map() method, then using spread syntax
  //instead of using spread syntax, you could also use this.split("").map().join(''), but we went with spread syntax.map().join('')
  return [...this].map(element => element == element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()).join('')
  /*let result = ''
  for (let i = 0; i < this.length; i++){
    if(this[i] == this[i].toUpperCase()){
      result += this[i].toLowerCase()
    }else{
      result += this[i].toUpperCase()
    }
  }
  return result*/
}
//------------------------------------------------------------------
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
const smash = words => words.join(' ')
//------------------------------------------------------------------
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// n= 5, m=5: 25
// n=-5, m=5:  0
function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0
  }
  return n * m;
}
//------------------------------------------------------------------
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr){
  return arr.filter((_, index) => index % 2 === 0) //if the element's index is even, it is filtered out
}
//------------------------------------------------------------------
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// [ ("english", "Welcome")
// , ("czech", "Vitejte")
// , ("danish", "Velkomst")
// , ("dutch", "Welkom")
// , ("estonian", "Tere tulemast")
// , ("finnish", "Tervetuloa")
// , ("flemish", "Welgekomen")
// , ("french", "Bienvenue")
// , ("german", "Willkommen")
// , ("irish", "Failte")
// , ("italian", "Benvenuto")
// , ("latvian", "Gaidits")
// , ("lithuanian", "Laukiamas")
// , ("polish", "Witamy")
// , ("spanish", "Bienvenido")
// , ("swedish", "Valkommen")
// , ("welsh", "Croeso")
// ]
function greet (language){
	var database = 
  {
    "english": "Welcome",
    "czech": "Vitejte",
    "danish": "Velkomst",
    "dutch": "Welkom",
    "estonian": "Tere tulemast",
    "finnish": "Tervetuloa",
    "flemish": "Welgekomen",
    "french": "Bienvenue",
    "german": "Willkommen",
    "irish": "Failte",
    "italian": "Benvenuto",
    "latvian": "Gaidits",
    "lithuanian": "Laukiamas",
    "polish": "Witamy",
    "spanish": "Bienvenido",
    "swedish": "Valkommen",
    "welsh": "Croeso"
  };
  for (var key in database){
    if(key == language){
      return database[key];
    }
  }
  return database['english'];
}
//------------------------------------------------------------------
//Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i+i++;
}
//------------------------------------------------------------------
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
const booleanToString = (b) => {
  return b.toString()
}
//------------------------------------------------------------------
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade (s1, s2, s3) {
  let average = Math.floor((s1 + s2 + s3) / 3)
  if(average < 60){
    return 'F'
  }else if(average < 70){
    return 'D'
  }else if(average < 80){
    return 'C'
  }else if(average < 90){
    return 'B'
  }else{
    return 'A'
  }
}
//------------------------------------------------------------------
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5
function litres(time) {
  //0.5 litres per hour
  //time in hours, round down
  let liters = 0.5;
  let lph = Math.floor(liters * time)
  return lph;
}
//------------------------------------------------------------------
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}
//------------------------------------------------------------------
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// function greet (name, owner) {
//   if(name == owner){
//     return 'Hello boss'
//   }else{
//     return 'Hello guest'
//   }
// }

// same but with arrow function and ternary if statement
const greet = (name, owner) => {return name == owner ? 'Hello boss' : 'Hello guest';}
//------------------------------------------------------------------
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
function maps(x){
  return x.map(element => element * 2)
}
//------------------------------------------------------------------
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
const hoopCount = (n) => {
  if(n >= 10){
    return 'Great, now move on to tricks'
  }else{
    return 'Keep at it until you get it'
  }
}
//--------------------------------------------------------------------
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined
const countSheeps = arrayOfSheep => arrayOfSheep.filter(Boolean).length //callback function syntax with boolean constructor
//--------------------------------------------------------------------
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]
const monkeyCount = n => Array.from({length: n},(_,index) => index +1)
//------------------------------------------------------------------
function boolToWord( bool ){
  if(bool == true){
    return "Yes";
  }else{
    return "No";
  }
}
//------------------------------------------------------------------
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?
const greet = () => 'hello world!'
//------------------------------------------------------------------
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
const fixTheMeerkat = arr => arr.reverse()
//------------------------------------------------------------------
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
function strCount(str, letter){  
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if(str.charAt(i) == letter){
      count += 1;
    }
  }
  return count;
}
//------------------------------------------------------------------
// Create a method to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function() {
  return this==this.toUpperCase()
}
//------------------------------------------------------------------
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
//------------------------------------------------------------------
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
function bonusTime(salary, bonus) {
  if(bonus === true) {
    return "£" + salary * 10;
  }else{
    return "£" + salary;
  }
}
//------------------------------------------------------------------
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
function correct(string) {
  let correctedText = "";
  for(let i = 0; i < string.length; i++){
    switch(string[i]){
      case '5':
        correctedText += 'S';
        break;
      case '0':
        correctedText += 'O';
        break;
      case '1':
        correctedText += 'I';
        break;
      default:
        correctedText += string[i];
    }
  }
  return correctedText;
}
//------------------------------------------------------------------
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata
function shortcut(string){
  return string.replace(/[aeiou]/gi, '');
}
//------------------------------------------------------------------
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
const twoSort = (s) => s.sort()[0].split('').join('***');
//------------------------------------------------------------------
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
const solution = (a, b) => {
  if(a.length > b.length){
    return b + a + b;
  }else{
    return a + b + a;
  }
}
//------------------------------------------------------------------
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
function century (year) {
  // We need 'year' to be a number otherwise it remains a string. Putting a '+' plus sign in front of the variable 'year' keeps it as an integer.
  if(year.toString().length < 3) return 1;
  const firstTwoDigits = +year.toString().slice(0, -2);
  if (year % 100 === 0) return firstTwoDigits;
  return firstTwoDigits + 1;
}
// Another solution:
const centuryRefactored = year => Math.ceil(year/100)
//------------------------------------------------------------------
// Write a function that returns a string in which firstname is swapped with last name.
// Example(Input --> Output)
// "john McClane" --> "McClane john"
const nameShuffler = str => str.split(' ').reverse().join(' ');
//------------------------------------------------------------------
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
const past = (h, m, s) => (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
//------------------------------------------------------------------
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
const sum = numbers => numbers.reduce((acc, c) => acc + c, 0);
//------------------------------------------------------------------
// Now you have to write a function that takes an argument and returns the square of it.
const square = num => Math.pow(num, 2);
//------------------------------------------------------------------
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  if(number % 2 === 0) {
    return number * 8;
  }else{
    return number * 9;
  }
}
//------------------------------------------------------------------
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
function invert (array) {
  return array.map((element) => element * -1);
}
//------------------------------------------------------------------
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
function findAverage(array) {
  if(array != 0){
    return array.reduce((acc, c) => acc + c) / array.length;
  }else{
    return 0
  }
}
//------------------------------------------------------------------
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)
function hero(bullets, dragons){
  if(bullets / 2 >= dragons){
    return true;
  }else{
    return false;
  }
}
//------------------------------------------------------------------
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"
function peopleWithAgeDrink(old){
  if(old < 14){
    return 'drink toddy';
  } else if (old < 18){
    return 'drink coke';
  } else if (old < 21){
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
}
//------------------------------------------------------------------
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
function arrayPlusArray(arr1, arr2) {
  const combined = [...arr1, ...arr2];
  return combined.reduce((total, n) => {
    return total + n
  }, 0);
}
//------------------------------------------------------------------
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.
// This returns a boolean value true if mpg * fuelLeft is greater than or equal to the distance to the pump.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};
// another solution, different approach to equation.
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump/mpg <= fuelLeft
// };
//------------------------------------------------------------------
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12
const quarterOf = (month) => {
  if (month <= 3) return 1;
  if (month <= 6) return 2;
  if (month <= 9) return 3;
  return 4;
}
//another solution
const quartersOf = month => Math.ceil(month/3);
//------------------------------------------------------------------
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
function rentalCarCost (d) {
  let total = d * 40;
  if(d >= 7 && d > 3){
    return total -= 50;
  } else if (d >= 3 && d < 7){
    return total -= 20;
  } else {
    return total;
  }
}
//------------------------------------------------------------------
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.
function updateLight(current){
  if(current === 'green') return 'yellow';
  if(current === 'yellow') return 'red';
  if(current === 'red') return 'green';
}