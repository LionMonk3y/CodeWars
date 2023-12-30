// https://www.codewars.com/kata/5af2b240d2ee2764420000a2/javascript
// Hello,

// I am Jomo Pipi

// and today we will be evaluating an expression like this:

// (there are an infinite number of radicals)

// for a given value x

function fn(x) {
  const result = (1 + Math.sqrt(1 + 4 * x)) / 2;

  return result;
}
