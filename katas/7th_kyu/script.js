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