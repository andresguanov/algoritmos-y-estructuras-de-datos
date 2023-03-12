function sortedSquares(nums: number[]): number[] {
  const res = new Array(nums.length)
  let left = 0
  let right = nums.length - 1

  for (let i = res.length - 1; i >= 0; i--) {
    if (Math.abs(nums[right]) > Math.abs(nums[left])) {
      res[i] = nums[right] ** 2
      right--
    } else {
      res[i] = nums[left] ** 2
      left++
    }
  }

  return res
}
