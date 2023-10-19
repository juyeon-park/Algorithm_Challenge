function solution(k, tangerine) {
  let answer = 0
  const tang = new Map()

  tangerine.forEach((v) => {
    tang.set(v, tang.has(v) ? tang.get(v) + 1 : 1)
  })

  const sortedTang = [...tang].sort((a, b) => b[1] - a[1])

  sortedTang.forEach((v) => {
    if (k > 0) {
      k -= v[1]
      answer++
    }
  })
  return answer
}
