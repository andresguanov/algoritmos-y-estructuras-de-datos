/**
 * T: O(maxUniques * n) | S: O(26)
 */
function longestSubstring(s: string, k: number): number {
  let max = 0
  let maxUniques = new Set([...s]).size

  for (let currentUniques = 1; currentUniques <= maxUniques; currentUniques++) {
    let start = 0,
      end = 0
    let uniques = 0
    let countAtLeastK = 0
    let map = {}

    while (end < s.length) {
      //Hay que crear el contador y contar los uniques
      if (s[end] in map) {
        map[s[end]]++
      } else {
        uniques++
        map[s[end]] = 1
      }

      //Revisar los que cumplan atLeastK
      if (map[s[end]] === k) {
        countAtLeastK++
      }

      end++

      //Validar que no haya más uniques de los necesarios
      while (uniques > currentUniques) {
        if (map[s[start]] === k) {
          countAtLeastK--
        }

        map[s[start]]--

        if (map[s[start]] === 0) {
          uniques--
          delete map[s[start]]
        }

        start++
      }

      if (uniques === currentUniques && uniques === countAtLeastK) {
        max = Math.max(max, end - start)
      }
    }
  }

  return max
}
