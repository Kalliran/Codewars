// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

function average(scores) {
    // code to calculate the average
    return Math.round(scores.reduce((acc, c) => acc + c, 0) / scores.length);
}
//-------------------------------------------------------------------------------------------
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str){
    let count = 0;
    let vowels = 'aeiouAEIOU'.split('');
    str.split('').forEach((element) => {
        if(vowels.indexOf(element) !== -1){
            count++;
        }
    });
    // console.log(count)
}

getCount("abracadabra");
//-------------------------------------------------------------------------------------------
// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)
function squareDigits(num){
    let numArray = num.toString();   //turn number to a string
    let squareArray = [];   // create an array to save the new values of the string
    for (let i = 0; i < numArray.length; i++) {   // iterate through the string
     squareArray[i] = numArray[i] * numArray[i];   // save the square of the number to the array 
      }
    return Number(squareArray.join('')); 
}
//--------------------------------------------------------------------------------------------
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    // ...
    numbers = numbers.split(" "); //divides into an array of strings
    return Math.max(...numbers) + " " + Math.min(...numbers); //return highest and lowest
}
highAndLow('1', '2', '-3', '4', '5')
//-------------------------------------------------------------------------------------------
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
    if(s.length % 2 === 0){ //if string is even
        return s.slice(s.length / 2 - 1, s.length / 2 + 1) //return two middle chars
    }else{  // if it's odd
        return s[Math.floor(s.length / 2)]  //return one middle char
    }
}
//-------------------------------------------------------------------------------------------
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l){
    // Return a new array with the strings filtered out
    return l.filter((e) => Number.isInteger(e));
}
//-------------------------------------------------------------------------------------------
//This time no story, no theory. The examples below show you how to write function accum:
//The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s){
    return s.split('').map((c,i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
//-------------------------------------------------------------------------------------------
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
function isIsogram(str){
    str = str.toLowerCase();  // converting string to lowercase
    let text = str.split(""); // making it an array
    if (text.length === 0) {  // if the string is empty return true
        return true;
    }
    for (let i = 0; i < text.length; i++) {
        if (text.indexOf(text[i]) !== text.lastIndexOf(text[i]) ){  
            return false;                                           
        } //compare the first index with the last index of each letter.
    }
    return true;
}
//-------------------------------------------------------------------------------------------
//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function xO(str){
   return str.toLowerCase().split('x').length === str.toLowerCase().split('0').length;
}
//-------------------------------------------------------------------------------------------
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"
function reverseWords(str){
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
//-------------------------------------------------------------------------------------------
//Given an integral number, determine if it's a square number:
//In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
//Basically, we are looking to get a whole number back.
//Examples:
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
const isSquare = (n) => {
    if(Number.isInteger(Math.sqrt(n))){
        return true;
    }else{
        return false;
    }
}
//-------------------------------------------------------------------------------------------
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.
// Example:
// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
function lastSurvivor(letters, coords) {
    letters = letters.split('');
    for (let i = 0; i<coords.length; i++){
        letters.splice(coords[i], 1);
    };
    return letters.join('');
}
//-------------------------------------------------------------------------------------------
//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
const addBinary = (a, b) => (a+b).toString(2) //decimal to binary with the Number.toString() method
//-------------------------------------------------------------------------------------------
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.
const friend = (friends) => {
    return friends.filter(str => str.length === 4)
} 
//-------------------------------------------------------------------------------------------
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
function towerBuilder(nFloors){
    let space = "";
    let star = "";
    let result = [];
    for(let i = 1; i <= nFloors; i++){
        space = (" ").repeat(nFloors - i);
        star = ("*").repeat((2 * i) - i);
        result.push(space + star + space);
    }
    return result;
}
//----------------------------------------------------------------------
//Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.
// Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.
// Changes from calm to wave or wave to calm will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that number is more than 20% of the length of the string, return "Throw Up", else return "No Problem".
function seaSick(x){
    let wave = x.split("_~").length-1
    let calm = x.split("~_").length-1
    return (wave+calm)/x.length>0.2?"Throw Up":"No Problem"
}
//----------------------------------------------------------------------
// Given two positive integers m (width) and n (height), fill a two-dimensional list (or array) of size m-by-n in the following way:
// (1) All the elements in the first and last row and column are 1.
// (2) All the elements in the second and second-last row and column are 2, excluding the elements from step 1.
// (3) All the elements in the third and third-last row and column are 3, excluding the elements from the previous steps.
// And so on ...
// Examples
// Given m = 5, n = 8, your function should return
// [[1, 1, 1, 1, 1],
//  [1, 2, 2, 2, 1],
//  [1, 2, 3, 2, 1],
//  [1, 2, 3, 2, 1],
//  [1, 2, 3, 2, 1], 
//  [1, 2, 3, 2, 1],
//  [1, 2, 2, 2, 1],
//  [1, 1, 1, 1, 1]]
function createBox(m, n) {
    let result = []
    for(let height = 0; height < n; height++) {
      result.push([])
      for(let width = 0; width < m; width++) {
        let value = Math.min(width + 1, m - width, height + 1, n - height)
        result[result.length - 1].push(value)
      }
    }
    return result
}
//----------------------------------------------------------------------
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. The square root of a number is an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if(Math.sqrt(sq) % 1){
        return -1;
    }
    return (Math.sqrt(sq) + 1) ** 2
}
//----------------------------------------------------------------------
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
const number = array => array.map((element, index) => `${index + 1}: ${element}`)
//----------------------------------------------------------------------
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {  
    let smallest = numbers.sort((a,b) => a - b).slice(0, 2).reduce();
    return smallest;
}
//------------------------------------------------------------------
function getSum(a,b){
    let min = Math.min(a,b),
        max = Math.max(a,b)
    return (max - min + 1) * (max + min) / 2
}
//------------------------------------------------------------------
// There is no single treatment that works for every phobia, but some people cure it by being gradually exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing primitive spiders.

// Our spiders will have legs, body, eyes and a mouth. Here are some examples:

// /\((OOwOO))/\

// /╲(((0000w0000)))╱\

// ^(oWo)^
// You will be given four values:

// leg size where each value stands for its own leg type: 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
// body size where each value stands for its own body type: 1 for "( )", 2 for "(( ))", 3 for "((( )))"
// mouth representing the spider's mouth
// eye representing the spider's eye
// Note: the eyes are symmetric, and their total amount is 2 to the power of body size.

// You will also be given only valid data. That's it for the instructions, you can start coding!
function drawSpider(legSize, bodySize, mouth, eye){
    let eyes = `${eye}`.repeat(Math.floor(Math.pow(bodySize,2)/2))
    console.log(eyes)
    if (bodySize===1){
        eyes = `${eye}`.repeat(bodySize)
    }
    let bodyL = `(`.repeat(bodySize)
    let bodyR = `)`.repeat(bodySize)
    let legs = (legSize === 1 ? "^ ^":legSize===2?"\/\\ \/\\":legSize===3?"\/╲ ╱\\":"╱╲ ╱╲")
    let legL = legs.split` `[0]
    let leg$ = legs.split` `[1]
    return legL+bodyL+eyes+mouth+eyes+bodyR+legR
}
//------------------------------------------------------------------
// Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.
// You will be given a string of student names. Sort them and return a list of names in descending order.
// Here is an example input:
// string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
// Here is an example return from your function:
//  lst = ['Takehiko',
//         'Takayuki',
//         'Takahiro',
//         'Takeshi',
//         'Takeshi',
//         'Takashi',
//         'Tadashi',
//         'Takeo',
//         'Takao']
const lineupStudents = (students) => {
    return students.split(' ').sort((a,b) => b.length - a.length || b.localeCompare(a))
}
//------------------------------------------------------------------
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
const solution = (str, ending) => str.endsWith(ending);
//------------------------------------------------------------------
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
const descendingOrder = n => Number([...String(n)].sort((a, b) => b - a).join(''));
//------------------------------------------------------------------
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 
const isTriangle = (a,b,c) => a + b > c && b + c > a && c + a > b;
//------------------------------------------------------------------
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN (pin) {
    if(pin.length != 4 && pin.length != 6){
        return false;
    }
    for(let i = 0; i < pin.length; i++){
        if(pin[i] > '9' || pin[i] < '0'){
            return false;
        }
    }
    return true;
}
// now using regex
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);
//-------------------------------------------------------------------------------------------
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
function gimme(triplet){
    if(triplet[0] > triplet[1] && triplet[0] < triplet[2] ||
       triplet[0] > triplet[2] && triplet[1] < triplet[0]){
        return 0;
    }
    if(triplet[1] > triplet[0] && triplet[1] < triplet[2] ||
        triplet[1] > triplet[2] && triplet[1] < triplet[0]){
        return 1;
     }
    return 2;
}
//-------------------------------------------------------------------------------------------
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
const rowSumOddNumbers = n => n ** 3;
//-------------------------------------------------------------------------------------------
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.
function nbYear(p0, percent, aug, p){
    //using var instead of let because we need to return count and the scope needs to be outside of the for loop.
    for (var count = 0; p0 < p; count++){
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return count;
}
// another way with faster execution
const nbYear = (p0, percent, aug, p) => p0 < p ? 1 + nbYear(p0 + p0 * percent / 100 + aug | 0, percent, aug, p) : 0;
//-------------------------------------------------------------------------------------------
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
function printerError(s) {
    result = 0;
    for (let index in s) {
        if (s[index] > 'm') {
            result++;
        }
    }
    return result + '/' + s.length;
}
//shorter solution with regex
const printerError = s => `${s.match(/[n-z]/g).length}/${s.length}`;
//-------------------------------------------------------------------------------------------
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => /* binary decimal places: 8, 4, 2, 1*/ parseInt(arr.join(''), 2);
//-------------------------------------------------------------------------------------------
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
const numbers = (busStops) => busStops.reduce((people, [getIn, getOut]) => people + getIn - getOut, 0);
// Test Cases:
describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
      assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
      assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
      assert.strictEqual(number([[0,0]]),0);
    });
  });
//-------------------------------------------------------------------------------------------
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
function oddOrEven(array){
    return array.reduce((p, c) => p + c, 0) % 2 ? 'odd' : 'even';
}
// Test cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.strictEqual(oddOrEven([0]), 'even')
    assert.strictEqual(oddOrEven([1]), 'odd')
    assert.strictEqual(oddOrEven([]), 'even')
  });
  
  it('Even tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
    assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
  });
  
  it('Negative Even tests', () => {
    assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
    assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  it('Odd tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  it('Negative Odd tests', () => {
    assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
  });
});
//-------------------------------------------------------------------------------------------
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
// Added spread syntax because it allows an iterable, such as an array or string, to be expanded in places where zero or more arguments are expected.
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}
//-------------------------------------------------------------------------------------------
// Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.
function SeriesSum(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += 1 / (1 + i * 3)
    }
    return result.toFixed(2);
}
//-------------------------------------------------------------------------------------------
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
function divisors (integer) {
    const listDivisors = [];
    for (let i=2; i < integer; i++){
        if (integer % i === 0) {
            listDivisors.push(i);
        }
    }
    if (listDivisors.length == 0) {
        return `${integer} is prime`;
    } else {
        return listDivisors;
    }
};
//-------------------------------------------------------------------------------------------
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
function removeUrlAnchor(url){
    result = url.split('#')[0];
    return (result);
}