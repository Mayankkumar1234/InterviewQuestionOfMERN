// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }   :- In this case variable are global scope , So when the porgram executes it will execute the entire code form 0 to 9 and create the refrence of settimeout in memory and at the end when the t value becomes 10 it will start printing the value of i;

// In case of let (It is local scope), So it creates a new variable for every execution and store the values and when the code executes it prints the same value.


