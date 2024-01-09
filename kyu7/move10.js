// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(str) {
  const shiftedString = str.replace(/[a-z]/gi, (char) => {
    const isUpperCase = char === char.toUpperCase();
    const charCode = char.charCodeAt(0);
    const shiftedCharCode =
      ((charCode - (isUpperCase ? 65 : 97) + 10) % 26) +
      (isUpperCase ? 65 : 97);
    return String.fromCharCode(shiftedCharCode);
  });

  return shiftedString;
}
