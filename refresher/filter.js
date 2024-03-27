let arr = [11, 32, 3, 14, 5];

let arr2 = arr.filter((i) => {
  return i > 13;
});

console.log(arr2, arr);

// function check(x) {
//   let num2 = [];
//   x.filter((i) => {
//     if (i > 3) {
//       num2.push(x[i]);
//     }
//   });
// }

// console.log(check(num));
