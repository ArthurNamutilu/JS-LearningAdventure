// spread operator denoted by three dots (...). It allows an iterable (such as an array or a string) to be expanded into individual elements.
// uses:

// copying arrays:
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

// concatinating arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

// passing arguments
const sum = (a, b, c) => a + b + c;
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// creating arrays - you can use spread operator to insert elements into an array at specific positions
const originalArr = [1, 2, 3];
const copyArr = [0, ...originalArr, 4, 5];

// converting Iterables: eg string to array
const nameStr = "Javascript";
const nameArr = [...nameStr];
