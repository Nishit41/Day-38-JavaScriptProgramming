let numArray = [];
for(i =0 ; i<10 ; i++){
let num = Math.floor(Math.random()*1000%900+100);
numArray.push(num);
}
console.log(numArray);
numArray.sort();
console.log(numArray);
let secondLargestElement = numArray[8];
let secondSmallestElement = numArray[1];
console.log(secondLargestElement,secondSmallestElement);