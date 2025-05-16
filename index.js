
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

  

// Slice  and splice in Js : // Both are used to manipulate the array but they are different.

// 1. Slice : The slice() method returns a   portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// let arr = [1,2,3,4,5,6];

// let newArr = arr.slice(1,4);

// console.log(newArr); // [2,3,4]

// 2. Splice : It add or removes the elements from the array . It modifies the original array..

// *******  Function Declaration *****
// A function declaration defines a function with a specified name. It consists of the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.


// function add(a,b){
//   return a+b;
// }

// console.log(add(1,2)); // 3


// *******  Function Expression *****
 
// A function expression defines a function within an expression. The function can be anonymous (without a name) or named. Function expressions are not hoisted, so they must be defined before they are called.


// const multiply = function(a, b) {
//   return a * b;
// };

// console.log(multiply(4, 5)); // Output: 20


// A function expression can also be immediately invoked after it is defined (IIFE - Immediately Invoked Function Expression).

// (function() {
//   console.log("IIFE executed"); // Output: IIFE executed
// })();

//*********/ Event Propogation in Js  *****:
//  // Event propagation is the way in which events are handled in the DOM. It consists of two phases: capturing and bubbling and targeting .
// 1. Capturing Phase: The event starts from the root of the DOM and travels down to the target element.
// 2. Bubbling Phase: The event starts from the target element and travels back up to the root of the DOM.


