// https://www.codewars.com/kata/57efab9acba9daa4d1000b30/javascript

// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

function bald(x) {
  const hairCount = (x.match(/\//g) || []).length;
  const cleanedHead = x.replace(/\//g, "-");

  let message;
  if (hairCount === 0) {
    message = "Clean!";
  } else if (hairCount === 1) {
    message = "Unicorn!";
  } else if (hairCount === 2) {
    message = "Homer!";
  } else if (hairCount >= 3 && hairCount <= 5) {
    message = "Careless!";
  } else {
    message = "Hobo!";
  }

  return [cleanedHead, message];
}