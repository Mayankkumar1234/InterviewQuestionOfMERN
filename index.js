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

// arr.splice(0, arr.length);  //(startIndex, deleteCount, option(element that you want to add), optional)

// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6];

// arr.splice(0, 2, 3, 4, 5);

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

//What is Reconciliation in React JS?

// /Reconciliation in React is the process through which React updates the DOM when the state or props of a component change. It is how React compares the new virtual DOM with the previous one and efficiently determines what has changed, so it can apply the minimum number of DOM updates required.

// Why is Reconciliation Needed?
// The real DOM is slow to manipulate, and constantly re-rendering everything from scratch is inefficient. So, React uses a virtual DOM (an in-memory representation of the real DOM) and applies changes only where necessary using reconciliation.

// How Reconciliation Works (Step-by-Step):
// Component Changes: A component's state or props are updated.

// New Virtual DOM Tree: React creates a new virtual DOM tree based on the updated state/props.

// Diffing Algorithm: React compares the new virtual DOM with the previous one using a diffing algorithm.

// Minimal Updates: React calculates the smallest number of changes needed and updates only those specific parts of the real DOM.

//What Is Replication In MongoDB?

// Optional Cahining

// deep copy and shallow copy

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

// let a=2;
// let b=4;

// a=a!=b?b:a;

// b=b!=a?a:b;

// console.log(a,b)

// swapping of two variable without using third variable :-

// a = a*b;
// b = a/b;
// a = a/b;

// let str = "mayank kumar";

// let myMap = new Map();

// for(let i=0;i<str.length;i++){
//   if(str[i] == " ") continue
//   myMap.set(str[i],(myMap.get(str[i]) || 0) + 1)
// }

// console.log(myMap)

// console.log("2" -2); ->0

// let str = "mock interview";

// let newArr = str.split(" ");

// for(let i=0;i<newArr.length;i++){
//   newArr[i].toUpperCase();
// }

// // newArr.join(" ");

// console.log(newArr.join(" "))

// Write a program to remove the duplicates from the array ?

// function removeArray(arr){
//   let left = 0;
//   for(let right=1;right<arr.length;right++){
//       if(arr[left] != arr[right]){
//         arr[left +1 ] =  arr[right];
//         left++;
//       }
//   }
//   arr.length = left+1;
//   return arr
// }

// // console.log(removeArray([1,2,2,3,4,5,5,5,6,6,7,7,7,8]))

// //Porgram to  find the nth gratest element without sorting :-

// function findNthGreatest(arr, n) {
//   let tempArr = [...arr];
//   let newArr = [];
//   for (let i = 0; i < n; i++) {
//     let maxElem = Math.max(...tempArr);

//     // newArr.push(maxElem);
//     console.log(maxElem)
//     let idx = tempArr.indexOf(maxElem);
//    console.log( arr.splice(idx, 1));
//   }
//   console.log(newArr);
// }

// // Example:
// let arr = [5, 3, 8, 1, 9, 7];

// let n = 3;
// console.log(`The ${n}rd greatest element is:`, findNthGreatest(arr, n));

//      }
//      return temp
//   }

//   let arr = [4,1,5,3,2];
//   findNthGreatest(arr)

// //  Program to find the first ,second and third smallest element of the arry

// function merge(arr1, arr2){
//   let i=0,j=0;
//   let combinedArr = [];

//    while(i<arr1.length && j<arr2.length){
//       if(arr1[i]<arr2[j]){
//          combinedArr.push(arr1[i])
//          i++;
//       }else{
//         combinedArr.push(arr2[j])
//         j++;
//       }
//    }
//    while(i<arr1.length){
//     combinedArr.push(arr1[i])
//     i++;
//    }
//    while(j<arr2.length){
//     combinedArr.push(arr2[j])
//     j++;
//    }
//    return combinedArr
// }

// function findFirstThreeShortest(arr){

//   if(arr.length == 1)   return arr;
//      let midIndex = Math.floor((arr.length)/2);
//       let left = findFirstThreeShortest(arr.slice(0, midIndex));
//       let right = findFirstThreeShortest(arr.slice(midIndex));

//      let output =   merge(left,right);
//      return [output[0], output[1], output[2]]
// }

// console.log(findFirstThreeShortest([-3,-7,3,4,2,1,5,-2]))

// // Porgram to count the frequency of each name :-

// // let emp = ["Nitin","Amit","Sumit","Tarun", "Nitin","Nitin","Tarun"];

// // function calculateFrequency(emp){
// //   let myMap = new Map();

// //   for(let i=0;i<emp.length;i++){
// //     myMap.set(emp[i] ,(myMap.get(emp[i])|| 0) + 1)
// //   }

// //   return myMap
// // }

// // console.log(calculateFrequency(emp))

//   // Program to print this pattern

// Program to find the nth greatest element in the array without sorting ?

// function findNthGreatest(arr, n){
//  let newArr = [...arr];
//  let myArr = [];

//  for(let i=0;i<n;i++){
//   let maxElem =  Math.max(...newArr);
//   let idx = newArr.indexOf(maxElem);
//   newArr.splice(idx, 1);
//     myArr.unshift(maxElem)
//  }
//  return myArr[0]
// }

// let arr = [5,4,3,1,2,2,3,3];
// console.log(findNthGreatest(arr,5));

// console.log(Math.max(...arr));

//  * *  *  *  *  *
//  *  *       *  *
//  *    *  *     *
//  *  *       *  *
//  * *  *  *  *  *

// Write a program to print this pattern ?

//  *             *
//  * *         * *
//  * * *     * * *
//  * * * * * * * *
//  * * *     * * *
//  * *         * *
//  *             *

// -> Write a program to print this pattern ?

// function printPattern(n) {
//   let output = ""
//   for (let i = 0; i < n / 2; i++) {
//     for (let j = 0; j <= i; j++) {
//      output += "* "
//     }  
//     for (let k = 0; k < n - 2 * i - 1; k++) {
//       output +="  ";
//     }
 
//     for (let l = 0; l <= i; l++) {
//       // console.log("* ");
//       output +="* ";
//     }
//     console.log(output)
//   }
// }

// printPattern(7);



// Event emitter in node js :-





