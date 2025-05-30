
var variable = 10;  // At the starting all the variables are declare and then they are initialized ...

(()=>{
  console.log(variable);  // 10

  variable = 20;

  console.log(variable); // 20 
})();

console.log(variable); // 20

var variable = 30;