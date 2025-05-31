var fullName = "Mayank kumar";

var obj = {
  fullName: "Hacked Full Name",

  prop: {
    fullName: "InsideProp",
    getFullName: function () {
      return this.fullName;
    },
  },
  getFullName: function () {
    return this.fullName;
  },
  getFullNameV2: () => this.fullName, // This inside an arrow function refers to the global object or window object not refers to current Object.
  getFullNameV3: (function () {
    return this.fullName;
  })(),
};

console.log(obj.prop.getFullName()); // InsideProp
console.log(obj.getFullName()); //  Hacked Full Name
console.log(obj.getFullNameV2()); // undefined
console.log(obj.getFullNameV3); // undefined
