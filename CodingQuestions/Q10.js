const mayank = {
  name: "Mayank kumar",
  sayName: function () {
    console.log(this.name);
  },
};

const john = {
  name: "John Doe",
  sayName: function () {
    console.log(this.name);
  },
};

function sayName() {
  console.log(this.name); // It will print undefined
}

sayName.call(mayank); // call pass the mayank objecc to the sayName function and this function start pointing to the mayank object

// john.sayName.call(mayank)
