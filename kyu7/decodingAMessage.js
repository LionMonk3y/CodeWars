// https://www.codewars.com/kata/565b9d6f8139573819000056/javascript

// You have managed to intercept an important message and you are trying to read it.

// You realise that the message has been encoded and can be decoded by switching each letter with a corresponding letter.

// You also notice that each letter is paired with the letter that it coincides with when the alphabet is reversed.

// For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc

// You read the first sentence:

// "r slkv mlylwb wvxlwvh gsrh nvhhztv"
// After a few minutes you manage to decode it:

// "i hope nobody decodes this message"
// Create a function that will instantly decode any of these messages

// You can assume no punctuation or capitals, only lower case letters, but remember spaces!

function decode(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reversedAlphabet = alphabet.split("").reverse().join("");

  return message
    .split("")
    .map((char) => {
      if (char === " ") {
        return " ";
      } else {
        const index = reversedAlphabet.indexOf(char);
        return alphabet[index];
      }
    })
    .join("");
}
