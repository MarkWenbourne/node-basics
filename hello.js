console.log("Hello, world!")
console.log("process:", process)
console.log("process.argv:", process.argv)
console.log("process.env.MY_ENV_VAR:", process.env.MY_ENV_VAR)
console.log("__filename:", __filename)
console.log("__dirname:", __dirname)

var circle = require("./circle")
console.log("circle:", circle)
console.log("circle.circumference(5):", circle.circumference(5))
console.log("circle.area(5):", circle.area(5))

var fs = require("fs")
var figlet = require("figlet")
figlet("Hello, CS 290!", function (err, data) {
  if (!err) {
    console.log(data);
  }
})