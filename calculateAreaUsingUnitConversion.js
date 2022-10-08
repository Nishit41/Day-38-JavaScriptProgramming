const prompt = require("prompt-sync")();
var length = parseFloat(prompt("Enter Number length in feet"));//60 feet
var width = parseFloat(prompt("Enter Number width in feet"));//40 feet
var area = 25*(3.28084*width*3.28084*length)//Area for 25 such plots
console.log("area  for 25 such plot in meter"+area);