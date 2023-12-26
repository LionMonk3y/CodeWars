// https://www.codewars.com/kata/57f8842367c96a89dc00018e/javascript
// You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

// You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

// Finally, if one of two animals are not present, return "boring without two animals".

function catMouse(map, moves) {
  const lines = map.split("\n");
  let catPos, mousePos;

  for (let i = 0; i < lines.length; i++) {
    const catIndex = lines[i].indexOf("C");
    const mouseIndex = lines[i].indexOf("m");

    if (catIndex !== -1) catPos = {row: i, col: catIndex};
    if (mouseIndex !== -1) mousePos = {row: i, col: mouseIndex};

    if (catPos && mousePos) break;
  }

  if (!catPos || !mousePos) return "boring without two animals";

  const distance =
    Math.abs(catPos.row - mousePos.row) + Math.abs(catPos.col - mousePos.col);

  return distance <= moves ? "Caught!" : "Escaped!";
}
