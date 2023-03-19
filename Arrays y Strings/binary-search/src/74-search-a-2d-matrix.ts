/**
 * T: O(log(m*n)) | S: O(1)
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length
  const n = matrix[0].length
  let start = 0
  let end = m * n

  while (start < end) {
    const mid = Math.floor((start + end) / 2)
    const row = Math.floor(mid / n)
    const col = mid % n

    if (matrix[row][col] === target) {
      return true
    }

    if (matrix[row][col] < target) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return false
}
