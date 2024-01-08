// https://www.codewars.com/kata/58811e9cfd05cb5aed0000a4/javascript

// Write a function centroid(c) to calculate the centroid of 3D coordinates.

// Return the results as a list of floats. Round the values to two decimal places.

function centroid(c) {
  const numPoints = c.length;
  if (numPoints === 0) {
    return [0, 0, 0];
  }

  const sumX = c.reduce((acc, point) => acc + point[0], 0);
  const sumY = c.reduce((acc, point) => acc + point[1], 0);
  const sumZ = c.reduce((acc, point) => acc + point[2], 0);

  const centroidX = parseFloat((sumX / numPoints).toFixed(2));
  const centroidY = parseFloat((sumY / numPoints).toFixed(2));
  const centroidZ = parseFloat((sumZ / numPoints).toFixed(2));

  return [centroidX, centroidY, centroidZ];
}
