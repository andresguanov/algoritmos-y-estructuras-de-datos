/**
 * T: O(n) | S: O(36)
 */

function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1
  let set = new Set([...'abcdefghijklmnopqrstuvwxyz0123456789'])

  while (left < right) {
    if (!set.has(s[left].toLowerCase())) {
      left++
    } else if (!set.has(s[right].toLowerCase())) {
      right--
    } else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false
      }
      left++
      right--
    }
  }

  return true
}
