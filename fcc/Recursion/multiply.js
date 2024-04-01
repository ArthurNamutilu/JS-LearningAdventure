// multiply the first n elements of an array to create the product of those elements

// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//         product *= arr[i];
//     }
//     return product
// }


// reccursion
// multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
// That means you can rewrite multiply in terms of itself and never need to use a loop.
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1]
    }
}
















const num = [10, 6, 8, 100];
console.log(multiply(num, 4));