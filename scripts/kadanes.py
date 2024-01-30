def kadanes(nums):
    maxSum = nums[0]
    curSum = 0

    for n in nums:
        curSum = max(curSum, 0)
        curSum += n
        maxSum = max(maxSum, curSum)
    return maxSum


arr = [1, 2, -3, 4, -1, 2, 1, -5, 4]
print(kadanes(arr))
