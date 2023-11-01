console.log("%c Assignment 3", "background-color:gold;color: #000");
/**
TODO
 * assignment 3
 * Use the Object.assign() to create a new Object containing all of the above 
 */

let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
