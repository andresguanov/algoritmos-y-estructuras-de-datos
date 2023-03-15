/**
 * T: O(n) | S: O(n)
 */
function findAnagrams(s: string, p: string): number[] {
  let start = 0
  let end = p.length - 1
  const idxs: number[] = []
  const pMap: Count = countElements(p)

  let subString = s.slice(0, end + 1)
  const sMap: Count = countElements(subString)

  if (isEqual(sMap, pMap)) {
    idxs.push(start)
  }

  while (end < s.length) {
    end++
    if (!sMap.has(s[end])) {
      sMap.set(s[end], 0)
    }

    sMap.set(s[end], sMap.get(s[end])! + 1)
    sMap.set(s[start], sMap.get(s[start])! - 1)

    if (sMap.get(s[start]) === 0) {
      sMap.delete(s[start])
    }

    start++

    if (isEqual(sMap, pMap)) {
      idxs.push(start)
    }
  }

  return idxs
}

type Count = Map<string, number>

function countElements(str: string): Count {
  let map: Count = new Map()
  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1)
    } else {
      map.set(char, 1)
    }
  }

  return map
}

function isEqual<T, U>(map1: Map<T, U>, map2: Map<T, U>): boolean {
  for (let [key, value] of map1) {
    if (value !== map2.get(key)) {
      return false
    }
  }

  return true
}
