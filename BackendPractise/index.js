const express = require("express");
const EventEmitter = require("events"); 
const event = new EventEmitter(); // It is a by default module in node.js -> The name is in capital letter becuse it is class based..
// -The EventEmitter class, found within Node.js's events module, facilitates communication between objects through a publish-subscribe pattern
const app = express();

let count = 0;
event.on("countAPI",()=>{
  count++;
  console.log("Count is: ",count);
})

app.get("/",(req,res)=>{
  res.send("Main page");
  event.emit("countAPI");
})

app.get("/search",(req,res)=>{
  res.send("Search api called");
  
  event.emit("countAPI");
})

app.get("/update",(req,res)=>{
  res.send("Update api called");
  
  event.emit("countAPI");
})


app.listen(4000,()=>{
  console.log("Server is running on port 4000");
})