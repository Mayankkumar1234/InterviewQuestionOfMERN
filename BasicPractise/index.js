// function check(){
//   return 100
// }

// var check;

// console.log(check);

// Infinite Currying :-

function infiniteCurry(val1) {
  if (!val2) {
    return val1;
  }
  return function (val2) {
    return val1 + val2;
  };
}

console.log(infiniteCurry(1)(2)());


// What does promise.All method does ?



// Difference between deep copy and shallow copy ?

