function solution(n) {
  const num = [1, 2, 4]
  let result = ''

  while (n > 0) {
    let i = (n - 1) % 3
    n = Math.floor((n - 1) / 3)
    result = num[i] + result
  }

  return result
}
