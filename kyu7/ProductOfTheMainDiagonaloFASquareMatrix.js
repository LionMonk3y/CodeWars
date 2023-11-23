// https://www.codewars.com/kata/551204b7509063d9ba000b45/javascript

// Given a list of rows of a square matrix, find the product of the main diagonal.

// Examples:

//   [[1, 0], [0, 1]] should return 1
//   [[1, 2, 3], [4, 5, 6], [7, 8, 9]] should return 45

function mainDiagonalProduct(matrix) {
  let product = 1;
  for (let i = 0; i < matrix.length; i++) {
    product *= matrix[i][i];
  }
  return product;
}
