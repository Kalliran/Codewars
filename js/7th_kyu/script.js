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