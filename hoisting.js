// hoisting of Var ---> var is hoisted with value undefined
console.log(x); // undefined
var x=100;
// hoisting of Let ---> Let is hoisted on top but not intialized hence error
console.log(y); // error 
let y=100;

// const is same as let 
// console.log(z); // error 
// const z=100;

// question

// console.log(x); 
// console.log(v);
// var x=100;
// let v=100;

var a=10; // Global variable
{var a=-10} //Local variable

let b=a;
{let b=-20}

console.log(b);
