function solution(storey) {
  let answer = 0

  const num = String(storey)
    .split('')
    .map((v) => Number(v))

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] > 5) {
      answer += 10 - num[i]
      num[i - 1]++
      if (i === 0) answer++
    } else if (num[i] === 5 && num[i - 1] >= 5) {
      answer += 5
      num[i - 1]++
    } else {
      answer += num[i]
    }
  }

  return answer
}
