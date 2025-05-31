const mayank = {
  name: "Mayank kumar",
  sayName: function () {
    console.log(this.name);
  },
};

setTimeout(mayank.sayName, 3 * 1000);

// 3*1000 :- This will exeutes the function after three seconds

// Revise the questions after the Q11
