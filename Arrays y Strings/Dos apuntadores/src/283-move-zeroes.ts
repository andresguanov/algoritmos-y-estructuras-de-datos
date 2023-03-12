/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
  let p = 0
  let i = 0

  while (i < nums.length) {
      if (nums[i] !== 0) {
          [nums[i], nums[p]]  = [0, nums[i]]
          p++
      }

      i++    
  }

};