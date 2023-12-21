// https://www.codewars.com/kata/59f11118a5e129e591000134/javascript

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

function repeats(arr) {
  const countMap = new Map();

  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let sum = 0;
  for (const [num, count] of countMap.entries()) {
    if (count === 1) {
      sum += num;
    }
  }

  return sum;
}
