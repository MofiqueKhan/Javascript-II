console.log("hello World..!");

// variables :-

// var
// var is global scope variable. it could be change its value when you reassign it .
console.log(a); // undefined
var a = 10;
a = 4
console.log(a); // 4

// let
// let is block scope variable. it could be change its value in its scope. when you reassign it .
// console.log(b); // reference error 
let b = 5;
b = 4;
console.log(b); // 4

//const
// const is global scope variable. it couldn't be change its value.

const c = 3;
// c= 2 // oops ! error 
console.log(c); //3
