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
//---------------------------------------------------------------------------------------
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