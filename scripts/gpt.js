function maxSubarraySum(nums) {
    let maxSum = nums[0];
    let curSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
  
      curSum = Math.max(curSum, 0);
      curSum += n;
      maxSum = Math.max(maxSum, curSum);
    }
  
    return maxSum;
  }
  
  // Example usage:
  
const array1 = [1, 2, -4, 5, 2]; // Expected: 8
const array2 = [-3, 6, -2, 4, -1]; // Expected: 9 
const array3 = [-1, -2, 3, -5, 7, -3]; // Expected: 7
const array4 = [2, -1, -3, 4, -1, 2, 1, -5, 4]; // Expected: 6
const array5 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Expected: 6

const inputArray = [1, 2, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarraySum(array5);
console.log(result); // Output: 7
  