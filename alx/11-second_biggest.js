#!/usr/bin/node

function findSecondLargest(numbers) {
    if (numbers.length <= 1) {
        return 0;
    }
    const largest = Math.max(...numbers);
    const filteredNumbers = numbers.filter(num => num !== largest);

    if (filteredNumbers.length === 0) {
        return 0;
    }
    return Math.max(...filteredNumbers);
}

const inputNumbers = process.argv.slice(2).map(Number);
const result = findSecondLargest(inputNumbers);
console.log(result);












// GPT HELP
// const numbers = [];

// if (process.argv.length < 2 || process.argv.length == 2) {
//     console.log('0');
// } else {
//     for (let i = 2; i < process.argv.length; i++){
//         numbers.push(parseInt(process.argv[i]));
//     }
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }
    
//     const indexToRemove = numbers.indexOf(largest);
//     if ( indexToRemove !== -1) {
//         numbers.splice(indexToRemove, 1);
//     }
    
    
//     let secondLargest = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > secondLargest) {
//             secondLargest = numbers[i];
//         }
//     }
//     console.log(secondLargest);
    
// }



// first thought

// for (let i = 2; i < process.argv.length; i++){
//     numbers.push(parseInt(process.argv[i]));
// }
// let largest = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// const indexToRemove = numbers.indexOf(largest);
// if ( indexToRemove !== -1) {
//     numbers.splice(indexToRemove, 1);
// }


// let secondLargest = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > secondLargest) {
//         secondLargest = numbers[i];
//     }
// }
// console.log(secondLargest);
