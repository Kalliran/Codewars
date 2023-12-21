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