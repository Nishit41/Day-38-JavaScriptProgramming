const prompt = require("prompt-sync")();
var length = parseFloat(prompt("Enter Number length in feet"));//60 feet
var width = parseFloat(prompt("Enter Number width in feet"));//40 feet
var area = 3.28084*width*3.28084*length
console.log("area in meter"+area);