// https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let newStr = str.split("")
    let numX = 0
    let numO = 0
    
    for (let i = 0; i < newStr.length; i++)
      if (newStr[i].toLowerCase() === "x"){
        numX += 1
      }else if(newStr[i].toLowerCase() === "o"){
        numO += 1
      }
    
    return numX === numO
}