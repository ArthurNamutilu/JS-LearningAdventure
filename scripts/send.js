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
  const inputArray = [1, 2, -3, 4, -1, 2, 1, -5, 4];
  const result = maxSubarraySum(inputArray);
  console.log(result);
  