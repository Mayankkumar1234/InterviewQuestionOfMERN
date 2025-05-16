
// First Class Function in js : First class functions are those functions which can be treated as a variable.
// In other words, we can pass a function as an argument to another function, return a function from another function, and assign a function to a variable.

// Example of First Class Function

// let printHello = function(){
//   console.log("Hello");
// }

// // printHello(); // Hello

// function myFun(func){
//   return func()
// }


// const gretting = myFun(printHello);


// Currying in Js : // Currying is a technique of evaluating function with multiple arguments, into sequence of functions with a single argument.
// Instead of taking all arguments at once, a curried function takes the first argument and returns a function that takes the second argument and so on.

// function curryAdd(a){
//   return function(b){
//     return function(c){
//       return a + b + c;
//     }
//   }
// }

// console.log(curryAdd(1)(2)(3)); // 6

// const curryAdd = a=>b =>a+b;
// const add = curryAdd(1);
// console.log(add(2)); // 3

// Immediate Invoke function in Js : // An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.

// (function myFun(){
//   console.log("Hello");
// })(); // Hello

// Another example of IIFE
// -/ !/ +/ function printHello(){
//    console.log("Hello...")
// }(); // Hello...

  