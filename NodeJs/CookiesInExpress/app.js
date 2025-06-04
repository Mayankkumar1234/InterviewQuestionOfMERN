const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Our express app is working fine");
});

//JSON object to be added to cookie
let users = {
  name: "Ritik",
  Age: "18",
};
//Route for adding cookie
app.get("/setuser", (req, res) => {
  res.cookie("userData", users, { expire: 40000 + Date.now() });
  res.send("user data added to cookie");
});

//Iterate users data from cookie
app.get("/getuser", (req, res) => {
  //shows all the cookies
  res.send(req.cookies.userData);
});

app.listen(9000, () => {
  console.log("Our server is working at PORT : 9000");
});
