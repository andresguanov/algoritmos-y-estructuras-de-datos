/**
 * T: O(n)
 * S: O(n)
 */
function lengthOfLongestSubstring(s: string): number {
  let p1 = 0
  let p2 = 0
  let set = new Set<string>()
  let max = 0

  while (p2 < s.length) {
    while (set.has(s[p2])) {
      set.delete(s[p1])
      p1++
    }
    max = Math.max(max, p2 - p1 + 1)
    set.add(s[p2])
    p2++
  }

  return max
}
