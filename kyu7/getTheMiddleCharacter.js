// https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(str) {
  const length = str.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return str.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return str.charAt(middleIndex);
  }
}
