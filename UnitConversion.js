const prompt = require("prompt-sync")();
var num = parseFloat(prompt("Enter Number in inch that you want to convert in  feet"));
var feet = num/12;//num = 42
console.log(feet);//3.5