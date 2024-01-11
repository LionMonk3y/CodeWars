// https://www.codewars.com/kata/59bc0059bf10a498a6000025/javascript
// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

function mutateMyStrings(stringOne, stringTwo) {
  const result = [stringOne];
  const arrOne = stringOne.split("");
  const arrTwo = stringTwo.split("");

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      arrOne[i] = arrTwo[i];
      result.push(arrOne.join(""));
    }
  }

  return result.join("\n") + "\n";
}
