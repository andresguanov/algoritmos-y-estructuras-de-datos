function validPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) {
      const skipLeft = [...s.slice(left + 1, right + 1)] //S: O(n)
      const skipRight = [...s.slice(left, right)] //S: O(n)
      return (
        skipLeft.join('') === skipLeft.reverse().join('') || //S: O(n)
        skipRight.join('') === skipRight.reverse().join('')
      ) //S: O(n)
    }
    left++
    right--
  }

  //S: O(4 * n) = O(n)
  //T: O(n)

  return true
}
