// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
  let count = 0;
  for(let i = 0; i < A.length; i++){
    for(let j = 0; j < A.length; j++){
        if(A[i] == A[j]){
            count++;
        }
    }
    if(count % 2 != 0){
        return A[i];
    }
  }
}
//-----------------------------------------------------------------------
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// Examples
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
const arrayDiff = (a, b) => {
  //compare values with list a and list b
  //remove all values from list a that are currently in list b, retain order
  //return result = what's left over after removing b values from a
  //   a = a.filter((val) => {
  //     return b.indexOf(val) == -1;
  //   })
  //   return a;
  a = a.filter(val => !b.includes(val))
  return a;
}
//-----------------------------------------------------------------------
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
//return the total number of smiling faces in the array
// : or ;
// - or ~
// ) or D
const countSmileys = (arr) => {
  if( arr.length === 0) {
    return 0;
  }
  let i = 0;
  let validSmileys = [
    ":)",
    ";)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ":-)",
    ":~)",
    ";~D",
    ";~)",
    ";-D",
    ";-)"
  ]
  for (let key of arr) {
    if (validSmileys.includes(key)) {
      i++;
    }
  }
  return i;
}
//------------------------------------------------------------------
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
const count = (string) => require('lodash').countBy(string);