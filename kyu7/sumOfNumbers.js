// https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}
