// Myfunc();
// var myName;
// console.log(myName);

// function Myfunc() {
//     console.log("function");
// }

// var myName = "sheto";
// console.log(myName);

// // Function declaration
// function whatDoYouDo() {
//     return "Hello Sheto from Normal Function";
// }
// console.log(whatDoYouDo());
// // Function expression
// var whatDoYouDo = function () {
//     return "Hello Sheto from Function expression";
// };
// console.log(whatDoYouDo());

// function X(x = 1, y = 2) {
//     console.log(arguments); // [5,6,7,6,9,8]

//     console.log("Number of Arguments : " + arguments.length); //6

//     for (i = 0; i < arguments.length; i++) {
//         console.log("Argument " + (i + 1) + " is : " + arguments[i]); // 5,6,7,6,9,8
//     }

//     return x + y; // 5+6 = 11
// }
// console.log("Result is : " + X(5, 6, 7, 6, 9, 8));

// function X() {
//     let Result = 0;
//     for (i = 0; i < arguments.length; i++) {
//         Result += arguments[i];
//         console.log("Result is : " + arguments[i]);
//     }
//     console.log("------------------------");
//     return Result;
// }
// console.log("Result is : " + X(5)); // 5
// console.log("##########################");
// console.log("Result is : " + X(5, 6)); // 11
// console.log("##########################");
// console.log("Result is : " + X(5, 6, 7)); // 18
// console.log("##########################");
// console.log("Result is : " + X(5, 6, 7, 6)); // 24
// console.log("##########################");
// console.log("Result is : " + X(5, 6, 7, 6, 9)); // 33

// // function X() {
// //     console.log(arguments[1]);
// // }
// // // Object

// let X = function () {
//     console.log(arguments[1]);
// };

// // let X = (...arguments) => {
// //     console.log(arguments[1]);
// // };

// X(2, [5, 6, 7, 6, 9], {
//     name: "Mahmoud",
//     Age: 25,
// });

// Best (IIFE)
// (function (Name) {
//     console.log("Hello " + Name);
// })("Mahmoud");

// function b() {
//     /* start Func b() scope*/
//     console.log(Myvar); // Order => (3) => output : 5 from Global scope
//     // as the is no Define for Myvar here
//     /* end Func b() scope*/
// }
// function a() {
//     /* start Func a() scope*/
//     var Myvar = 7;
//     console.log(Myvar); // Order => (2) => output : 7
//     b();
//     /* end Func a() scope*/
// }
// var Myvar = 5;
// console.log(Myvar); // Order => (1) => output : 5
// a();
// console.log(Myvar);
// // Order => (4) => output : 5
// // as it is in Global scope so it take it's variable from Global scope
var myvar = 5;
function a() {
    function b() {
        console.log(myvar);
    }
    console.log(myvar);
    var myvar = 7;
    console.log("🚀 => a => myvar:", myvar);
    b();
}
a();
