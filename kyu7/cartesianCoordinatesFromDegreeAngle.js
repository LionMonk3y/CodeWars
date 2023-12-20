// https://www.codewars.com/kata/555f43d8140a6df1dd00012b/javascript

// Write a simple function that takes polar coordinates (an angle in degrees and a radius) and returns the equivalent cartesian coordinates (rounded to 10 places).

// For example:

// coordinates(90,1)
// => (0.0, 1.0)

// coordinates(45, 1)
// => (0.7071067812, 0.7071067812)

function coordinates(angle, radius) {
  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);
  return [Math.round(x * 1e10) / 1e10, Math.round(y * 1e10) / 1e10];
}
