console.log("%c Assignment 2", "background-color:gold;color: #000");
/**
TODO
 * assignment 2
 * Create a new Object in four different ways
 */

// Method One
// Create Your Object Here
let objMethodOne = {
    property: "12",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
    property: "13",
});

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({
    property: "14",
});

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({
    property: "15",
});

console.log(objMethodFour.property); // "Method Four"
