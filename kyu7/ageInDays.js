// https://www.codewars.com/kata/5803753aab6c2099e600000e/javascript

// Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

// For example if today is 30 November 2015 then

// ageInDays(2015, 11, 1) returns "You are 29 days old"
// The birthday is expected to be in the past.

// Suggestions on how to improve the kata are welcome!

function ageInDays(year, month, day) {
  const today = new Date();
  const birthday = new Date(year, month - 1, day);

  const ageInMilliseconds = today - birthday;
  const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

  return `You are ${ageInDays} days old`;
}
