/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let [left, right] = [0, nums.length - 1]

  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      ;[nums[left], nums[i]] = [nums[i], nums[left]]
      left++
    } else if (nums[i] === 2) {
      ;[nums[i], nums[right]] = [nums[right], nums[i]]
      i--
      right--
    }
  }
}
