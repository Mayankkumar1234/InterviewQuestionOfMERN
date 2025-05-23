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

// 1. Capturing Phase: The event starts from the Parent  of the DOM and travels down to the inner element . It is also called trickle down.

// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let grandChild = document.querySelector("#grandChild");

//   parent.addEventListener("click",()=>{
//      alert("Component One is clicked...");
//     }, true)

//   child.addEventListener("click",()=>{
//      alert("Component two is clicked...");
//     }, true)

//   grandChild.addEventListener("click",()=>{
//      alert("Component three is clicked...");
//     }, true)

// 2. Bubbling Phase: When an event occurs on a component, it first runs the event handler on it, then  its parent component, then  grandParent component then up to  ancestors' components. By default, all event handles through this order from center component event to outermost component event.

// ********* Event bubling Example ***********

// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// let grandChild = document.querySelector("#grandChild");

//   parent.addEventListener("click",()=>{
//      alert("Component One is clicked...");
//     })

//   child.addEventListener("click",()=>{
//      alert("Component two is clicked...");
//     })

//   grandChild.addEventListener("click",()=>{
//      alert("Component three is clicked...");
//     })

//  ******* Lexical Scope    *******

// Lexical scope in JavaScript determines the accessibility of variables based on their physical location within the code. When a variable is used, the JavaScript engine first searches for it in the current scope. If not found, it looks in the outer, enclosing scope, and continues up the chain of parent scopes until it reaches the global scope. This "scope chain" is defined by the nesting of functions and blocks at the time the code is written (lexing time), not when it is executed.

// function outerFunction(){
//   let a =21;

//   function innerFunction(){
//     let b=22;
//     console.log(a+b);
//   }
//   innerFunction();
// }
// outerFunction()

// Find , every , some , filter , map , reduce in Js :

// parseInt() :- It is used to convert a string to an integer.

// console.log(parseInt("F78"));   // NaN

// console.log([1,2,3,4,5].map(e=>{
//   if(e>0) return ;

//   return e*10;

// }))

// Weak Set and Weak Map :-

//1 0 1 0 1 0
// 0 1 0 1
//    1 0
//     0

// MongoDB : Interview Questions

// 24.	MongoDB stores data in the form of - JSON
// 25. 	The command to insert a single document is - insertOne.
// MongoDB uses ObjectId as its default primary key.
// $in - Checks if a value exists in a specified array
// populate - Joins related documents
// db.users.aggregate([{ $match: { age: { $gt: 20 } } }]) -
// 20.	In CommonJS, every file is treated as a separate - module.
// 23.	Which method is used to create a readable stream - fs.createReadStream

// Cluster -  The cluster module in Node.js enables the creation of child processes (workers) that run simultaneously and share the same server port. This allows Node.js applications to take advantage of multi-core systems, improving performance and scalability.

// Event Emitter in node js : It is used to handle the events in node js.
// In the html buttons are used to handle the events but in node js we use event emitter to handle the events.

// Practise reduce function in js

// let arr = [1,2 ];
// accumulator stores the previous value and current stores the current value.

//   let output = arr.reduce((acc, curr)=> curr + curr)

// //  acc = 1

//   console.log(output); // 1*2*3*4*5 = 120

// console.log(true < 6);

var num = 500;

// function func() {
//   console.log(num); // In this console.log it will give more prefrence to local variable rather that global varible and print undefined in the case of var and give the reference error in the case of let and const--- lexial scope

//   let num= 100;
// }

// console.log(func());

// console.log(abc())
// function abc(){
//   console.log("pqr");
// }
// abc()

// function print(){
//   console.log("Hello ")
// }

// function sayHello(func){
//   func()
// }

// sayHello(print)

// let printVal = function(){
//   console.log("Hello...");
// }

// function abc(){
//   return function(){
//     console.log("Rahul");
//   }
// }

// console.log(abc()());

// let arr = [1, 2, 3, 4, 5];

// arr.splice(0, arr.length);

// console.log(arr);

let c = {
  name:"Rahul",

}

let name;
name = c;
c.name="kumar"