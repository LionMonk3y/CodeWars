// https://www.codewars.com/kata/58545549b45c01ccab00058c/javascript
// Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

// You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.

function calculate_total(subtotal, tax, tip) {
  const taxAmount = (subtotal * tax) / 100;
  const tipAmount = (subtotal * tip) / 100;

  const total = subtotal + taxAmount + tipAmount;
  return parseFloat(total.toFixed(2));
}
