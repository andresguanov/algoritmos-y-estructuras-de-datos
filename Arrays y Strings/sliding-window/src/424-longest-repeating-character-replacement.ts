/**
 * T: O(n) | S: O(26)
 */
function characterReplacement(s: string, k: number) {
  const count: Record<string, number> = {}
  let max = 0
  let start = 0
  let maxFrequency = 0

  for (let end = 0; end < s.length; end++) {
    if (!Boolean(count[s[end]])) {
      count[s[end]] = 0
    }
    count[s[end]]++
    maxFrequency = Math.max(maxFrequency, count[s[end]])

    while (end - start + 1 - maxFrequency > k) {
      count[s[start]]--
      start++
    }

    max = Math.max(max, end - start + 1)
  }

  return max
}
