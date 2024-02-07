#!/usr/bin/node

function large (n) {
let biggest = n[0];
//let biggest = process.argv[2];
//for (let i = 2; i < process.argv.length; i++) {
for (let i = 0; i < n.length; i++) {
  if (n[i] > biggest) {
 // if (process.argv[i] > biggest) {
    //biggest = process.argv[i];
    biggest = n[i];
  }
}
// console.log(biggest);
return biggest;
}

let num = [2, 21, 4, 170];
console.log(large(num));