console.log("%c Assignment 3", "background-color:gold;color: #000");

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let arr = arr3.concat(arr1, arr2);
console.log(arr);
// Write Your Destructuring Assignment Here
[, a, b, c, , , , ,] = arr;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

/**
 * ********************************************************************
 * ********************************************************************
 * ********************************************************************
 * ********************************************************************
 */
console.log("%c short solution ", "background-color:gold;color: #000");

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment

arr3[0] = arr1[0];
[c, a, b] = arr3;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
