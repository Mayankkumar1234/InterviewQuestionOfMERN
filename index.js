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

// let c = {
//   name:"Mayank"
// }

// let d;
// d=c;
// c.name="kumar";
// console.log(d.name);

// function infiniteCurrying(val1) {
//   return function (val2) {
//     if (!val2) {
//       return val1;
//     }
//     return infiniteCurrying(val1 + val2);
//   };
// }

// console.log(infiniteCurrying(1)(2)(3)(4)(5)(6)());

// for(let i=0;i<arr[arr.length-1];i++){
//   if(!arr.includes(i)){
//     console.log(i)
//   }
//   }

// console.log(arr)

//parseInt() is a built-in JavaScript function that parses a string and returns an integer. It takes two arguments: the string to parse and an optional radix, which specifies the base of the number system. If the radix is not specified, it defaults to 10

//parseInt("10"); // Returns 10
// parseInt("10", 10); // Returns 10
// parseInt("10", 2); // Returns 2 (binary)
// parseInt("10", 8); // Returns 8 (octal)
// parseInt("10", 16); // Returns 16 (hexadecimal)
// parseInt("10.5"); // Returns 10
// parseInt("10 20 30"); // Returns 10
// parseInt("hello"); // Returns NaN

// console.log(parseInt("10"));

// console.log(parseInt("1ab"))  - The string starts with a numeric character 1, which is parsed correctly.
// - When parseInt() encounters the non-numeric characters ab, it stops parsing and returns the parsed integer value 1.

//  function to remove the duplicates from the array

// let arr = [1,2,3,3,4,5,5,6];
// function removeDuplicates(arr){

// }
// console.log(removeDuplicates(arr))

// let arr = ['A','B','C','D','A','A'];

// console.log(arr.indexOf('A',5));

// let arr = ['A','c','Q','F','E'];

// arr.sort((a,b)=> a.localeCompare(b))

// console.log(arr);

// const arr = [[1,2],[3,4],[5,6],[7,8],[9,10]];

// const arr1 = [,,,];

// console.log(arr1.length)

// const arr = [{
// rollNo:1,
// name:"Mayank"
// },{
// rollNo:2,
// name:"Rohit"
// },{
// rollNo:3,
// name:"kanak"
// }]

// let output = arr.filter(a=> a.rollNo>=3)

// console.log(output)

// console.log([1,2,3] == [1,2,3]);

// console.log([] === []);

// typeof arr

//async await vs prmomises

// let abc = 2;
// let a = !--abc;
// let b = !--abc;

// console.log(a,b); // false true

// function Sum() {
//   console.log("abc");
//   return 2 + 2;
// }

// function Square() {
//   console.log("xyz");
//   return 4 * 4;
// }

// let a = (Sum(), Square());  //The comma operator (,) evaluates each of its operands from left to right and returns the value of the last operand.
// console.log(a)   --> Revise this question

// Sorting an array using bubble sort

// let arr = [4, 5, 3, 1, 2];

// function bubbleSort(arr) {
//   for(let i=0;i<arr.length;i++){
//     for(let j= 0 ;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//           let temp = arr[j];
//           arr[j]  = arr[j+1];
//           arr[j+1] = temp
//         }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort(arr));

// function Sum(a,b){
//   console.log("abc");
//   return a+b;
// }

// function printSomething(){
//   console.log("xyz");
// }

// let a = (Sum(), printSomething());

// console.log(a);

// console.log(typeof []);  --> object

// console.log([1,2,3] == [1,2,3])   ->Even though [1, 2, 3] looks the same on both sides, JavaScript is not comparing the content of the arrays — it's comparing their references (memory addresses).

// function print() {
//   console.log("ab");
// }

// print();

// let name = "Mayank";

// console.log(`Hello ${name}`)

// let arr = [1,2,3,4,5];

// arr.reduce((acc, curr)=>acc+curr,0);

// Insertion Sort
//   arr =[2,7 , 91 , 77 ,3];

// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<=i;j++){
//     if(arr[j] > arr[j+1]){
//      let temp = arr[j];
//      arr[j] = arr[j+1];
//      arr[j+1] =temp
//     }

//   }
// }

// console.log(arr)

// what are primitive datatype in js?

// There are 7 primitive datatype in Js :-

// - Number :- Which represent both floating point and interger. it also includes special values like infinity ,and  NaN(Not-a-Number).

// typeof NaN -> Number

// - String :- A string is a sequence of characters.
// - Boolean :- A boolean can be either true or false.
// - Undefined :- Which is a default value provided to the variable that have been declared but not been assigned a value yet.

// let result;
// console.log(result)

// - Null :- It is commonly used when you have declared a variable but either do not want to assign it a value yet or it should not have a value at all..
// let symbol = null

// -Symbol :- A symbol represents a unique and immutable identifier , which is often used for object properties to avoid naming conflicts

// const sym1 = Symbol("id");
// const sym2 = Symbol("id");

// console.log(sym1 === sym2)

// - BigInt :- A very large value
//  let num = 11111111112222233333333333333n

// Non Primitive Data type :-
// - Object  :- Object is a collection of key-value pairs . Object can contain other objects , functions and data types
// typeof arr = object
// Object is a kind of array
// Object can contain list of array inside it..

// - Array :-

// - Function :- A function is a block of reusable code

// Promises in js:-

// function fetchData(){
//   set
// }

// async function fetchData( ){

// let data = await fetch("https://jsonplaceholder.typicode.com/posts")

// return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//   resolve(data)
// },0)
// })
// }

// fetchData().then((data)=>{
//   console.log("Data : ",data)
// })
// .catch(err => console.log(err))

// call , apply and bind in js :-

//  Why we need template literals ?

// -Template literals in JavaScript are string literals that enable embedding expressions. They are enclosed by backticks (`) instead of single or double quotes and allow for multiline strings and string interpolation using ${expression} syntax.

// What is javaScript , and how is it different from java?
// - JavaScript is high-level , interpreted scripting language.

// It is used for web development.

//Difference :-

// - Client-side vs general-purpose (server-side)
// -
//

// Difference between null and undefinec...

// Null :-  Interntionally absence of object value, often assigned by developer..
// - Instead of writing empty object we can write
// let obj = null -> typeof Null = object

// Undefined :- Variable declared but not assigned a value.

// Explain the difference between == and ===

// Double equal to is known as equality operator and triple equal to is known as strict equality operator..


// == It check only value
//=== It checks the value as well as the datatype..