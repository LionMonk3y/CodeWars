// https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let result = 0
    
    for (let x = 0; x < str.length; x++){
     result += 
      (str[x] === "a" ||
      str[x] === "e" ||
      str[x] === "i" ||
      str[x] === "o" ||
      str[x] === "u")? 1 : 0;
    }
    
    return result;
  }