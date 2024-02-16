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
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
const feast = (beast, dish) => {
  if (beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1]) {
    return true
  } else {
    return false
  }
}
//------------------------------------------------------------------
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function well (x) {
  let goodIdeaCount = 0;
  for (let idea of x) {
    if(idea === 'good') goodIdeaCount += 1;
  }
  if(goodIdeaCount > 2) return 'I smell a series!';
  if(goodIdeaCount > 0) return 'Publish!';
  return 'Fail!';
}
//------------------------------------------------------------------
// Write a function which converts the input string to uppercase.
const makeUpperCase = (str) => str.toUpperCase();
//------------------------------------------------------------------
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
  if(name.charAt(0) === 'R' || name.charAt(0) === 'r'){
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}
//------------------------------------------------------------------
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string
function fakeBin(x){
 return x.split('').map(x => x < 5 ? 0 : 1).join('');
}