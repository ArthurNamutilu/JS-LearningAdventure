#!/usr/bin/node
let randomNums = Math.random()
let houses = [2, 4, 6, 8, 10];
let x = randomNums * houses.length;


console.log(randomNums);
// console.log(`The length of the array is: ${houses.length}`);
console.log(`${randomNums} X ${houses.length} is ${x}`);
console.log(Math.floor(randomNums * houses.length));