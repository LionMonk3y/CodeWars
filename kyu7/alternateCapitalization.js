// https://www.codewars.com/kata/59cfc000aeb2844d16000075/javascript
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
  const s1 = s
    .split("")
    .map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
  const s2 = s
    .split("")
    .map((char, index) =>
      index % 2 === 1 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
  return [s1, s2];
}
