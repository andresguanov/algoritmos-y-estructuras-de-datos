function reverseVowels(s: string): string {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let [left, right] = [0, s.length - 1]

  let arr = s.split('')
  while (left < right) {
    if (!vowels.includes(s[left].toLowerCase())) {
      left++
      continue
    }

    if (!vowels.includes(s[right].toLowerCase())) {
      right--
      continue
    }

    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }

  return arr.join('')
}
