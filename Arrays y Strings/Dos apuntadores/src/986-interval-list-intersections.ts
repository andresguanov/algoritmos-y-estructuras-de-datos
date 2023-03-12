function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
  let A = 0
  let B = 0
  let ans: number[][] = []

  while (A < firstList.length && B < secondList.length) {
    let [infA, maxA] = firstList[A]
    let [infB, maxB] = secondList[B]

    if (infA <= maxB && infB <= maxA) {
      let intersection = [Math.max(infA, infB), Math.min(maxA, maxB)]
      ans.push(intersection)
    }

    if (maxA < maxB) {
      A++
    } else {
      B++
    }
  }

  return ans
}
