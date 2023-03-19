/**
 * T: O(log(n)) | S: O(1)
 */
function search(nums: number[], target: number): number {
  let min = 0
  let max = nums.length - 1

  while (min <= max) {
    let mid = Math.floor((max + min) / 2)

    if (nums[mid] === target) {
      return mid
    }

    // Sorted part (ej: [1,2,3,4])
    if (nums[mid] <= nums[max]) {
      // if (nums[mid] < target && nums[max] > target) min
      if (nums[mid] > target || nums[max] < target) {
        max = mid - 1
      } else {
        min = mid + 1
      }

      // Rotated part (ej: [5,6,1,2])
    } else {
      if (nums[mid] < target || nums[min] > target) {
        min = mid + 1
      } else {
        max = mid - 1
      }
    }
  }

  return -1
}
