#!/usr/bin/node

function factorial(n) {
  const num = parseInt(n);

  if (isNaN(num)) {
    return 1;
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const input = process.argv[2];
console.log(factorial(input));


// #!/usr/bin/node

// function factorial(n) {
//   const num = parseInt(n);

//   if (isNaN) {
//     return 1;
//   } else if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// const input = process.argv[2];
// console.log(factorial(input));