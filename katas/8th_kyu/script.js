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
  [...this].map(element => element == element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()).join('')
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