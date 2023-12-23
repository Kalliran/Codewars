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
    console.log(count)
}

getCount("abracadabra");

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

