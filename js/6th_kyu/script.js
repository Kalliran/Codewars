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
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
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
  a = a.filter((val) => !b.includes(val));
  return a;
};
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
  if (arr.length === 0) {
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
    ";-)",
  ];
  for (let key of arr) {
    if (validSmileys.includes(key)) {
      i++;
    }
  }
  return i;
};
//------------------------------------------------------------------
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
const count = (string) => require("lodash").countBy(string);
//------------------------------------------------------------------
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"
function spinWords(string) {
  console.log(string);

  let stringArray = string.split(" ");
  console.log(stringArray);

  const reverseString = (string) => {
    return string.split("").reverse().join("");
  };

  //check for five or more letters
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= 5) {
      //if so reverse the string
      const word = stringArray[i];
      stringArray[i] = reverseString(word);
    }
  }
  return stringArray.join(" ");
}
//------------------------------------------------------------------
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
function createPhoneNumber(numbers) {
  return numbers.reduce(
    (phoneNum, arr) => phoneNum.replace("x", arr),
    "(xxx) xxx-xxxx"
  );
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//------------------------------------------------------------------
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
function dnaStrand(dna) {
  //build an object that will switch these up for us
  let object = { A: "T", T: "A", C: "G", G: "C" };
  //syntax will be .replace(regexp, replacerFunction) mdn reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes
  //g for global, that way it won't stop at one 'A', it will get all of them.
  //replacer function, object at e, it will find the key that e represents and replace it
  return dna.replace(/./g, (e) => object[e]);
}
//-----------------------------------------------------------------------
function duplicateEncode(word) {
  //create an empty object
  let object = {};
  let letter = word.toLowerCase().split("");
  for (let i = 0; i < letter.length; i++) {
    //loop through the letter array
    let x = letter[i];
    //if the object is undefined (which it is because it's currently empty above)
    if (object[x] === undefined) {
      //if undefined, make it exist with a value of 1
      object[x] = 1;
    } else {
      //adds one to the value if it isn't undefined
      object[x] += 1;
    }
  }
  return letter
    .map(function (letter) {
      //if ternary stating if object is === 1 return '(' else return ')'
      return object[letter] === 1 ? "(" : ")";
    })
    .join("");
}
//------------------------------------------------------------------
// "The city provides its citizens with a Walk Generating App on their phones. Every time you press the button, it sends you an array of one-letter strings representing directions to walk (e.g., ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction), and you know it takes you one minute to traverse one city block. So, create a function that will return true if the walk the app gives you will take exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise."
const isValidWalk = (walk) =>
  walk.length == 10 &&
  !walk.reduce((prev, curr) => prev + { n: 1, e: 2, s: -1, w: -2 }[curr], 0);
//------------------------------------------------------------------
// Title: Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d/)[0] - b.match(/\d/)[0];
    })
    .join(" ");
}
//------------------------------------------------------------------
// Title: Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
function persistence(num) {}
