// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/javascript

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(arr) {
  return arr.filter((value) => value % 2 === 0);
}
