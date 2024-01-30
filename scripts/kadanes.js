function maxSubArraySum(arr, size) {
    let maxint = Math.pow(2, 53);
    let currentMaxSum = -maxint - 1;  // max_so_far
    let currentSubarraySum = 0; // maxEndingHere 

    for (let i = 0; i < size; i++) {
        currentSubarraySum = currentSubarraySum + arr[i];
        if (currentMaxSum < currentSubarraySum) {
            currentMaxSum = currentSubarraySum;
        }
        if (currentSubarraySum < 0) {
            currentSubarraySum = 0;
        }
    }
    return currentMaxSum;
}

let a = [1, 2, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(a, a.length))