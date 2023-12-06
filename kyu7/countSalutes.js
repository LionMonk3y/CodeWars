// https://www.codewars.com/kata/605ae9e1d2be8a0023b494ed/javascript

// Description

// There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

// Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
// Note: 2 salutes occur when people meet, one to the other and vice versa.

// Input

// People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

function countSalutes(hallway) {
  let saluteCount = 0;
  let rightCount = 0;

  for (let char of hallway) {
    if (char === ">") {
      rightCount++;
    } else if (char === "<") {
      saluteCount += 2 * rightCount;
    }
  }

  return saluteCount;
}
