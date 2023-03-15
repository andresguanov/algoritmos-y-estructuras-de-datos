/**
 * T: O(n) | S: O(1)
 */

function findMaxConsecutiveOnes(nums: number[]): number {
  let p1 = 0,
    p2 = 0
  let max = 0

  while (p2 <= nums.length) {
    if (nums[p2] === 0 || p2 === nums.length) {
      max = Math.max(max, p2 - p1)
      p1 = p2 + 1
    }

    p2++
  }
  return max
}
