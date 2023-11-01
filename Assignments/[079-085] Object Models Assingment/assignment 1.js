console.log("%c Assignment 1", "background-color:gold;color: #000");

/**
TODO
 * assignment 1
 * Create the Object from which the following data is extracted
 */

// Create Your Object Her
let member = {
    Name: "Elzero",
    age: "38",
    country: "Egypt",

    fullDetails() {
        return `My Name Is ${this.Name}, My Age Is ${this.age}, I Live in ${this.country}`;
    },
};

console.log(member.Name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt
