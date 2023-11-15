// https://www.codewars.com/kata/55b051fac50a3292a9000025/javascript

// Filter the number

// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task

// Your task is to return a number from a string.

// Details

// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var filterString = function (value) {
  let arr = value.split("");
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      result += arr[i];
    }
  }

  return result.length > 0 ? Number(result) : NaN;
};
