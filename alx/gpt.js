#!/usr/bin/node

function findSecondLargest(numbers) {
    if (numbers.length <= 1) {
      return 0;
    }
  
    const largest = Math.max(...numbers);
    const filteredNumbers = numbers.filter((num) => num !== largest);
  
    if (filteredNumbers.length === 0) {
      return 0;
    }
  
    return Math.max(...filteredNumbers);
  }
  
  const inputNumbers = process.argv.slice(2).map(Number);
  const result = findSecondLargest(inputNumbers);
  console.log(result);
  





















// #!/usr/bin/node

// const numbers = [];

// if (process.argv.length < 3) {
//     console.log('0');
// } else {
//     for (let i = 2; i < process.argv.length; i++) {
//         numbers.push(parseInt(process.argv[i]));
//     }

//     let largest = Math.max(...numbers);
//     numbers = numbers.filter(num => num !== largest);

//     if (numbers.length === 0) {
//         console.log('0');
//     } else {
//         let secondLargest = Math.max(...numbers);
//         console.log(secondLargest);
//     }
// }
