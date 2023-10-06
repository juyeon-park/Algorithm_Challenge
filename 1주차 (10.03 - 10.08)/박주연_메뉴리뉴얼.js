function getCombination(arr, num) {
  const result = [] //조합 결과들을 담아줄 배열

  if (num === 1) return arr.map((n) => [n]) //nC1일때 바로 그 원소 배열을 리턴해줌

  //배열의 첫번째 원소부터 고정하고 나머지 원소들을 따로 배열로 만들어 조합한다(재귀)
  arr.forEach((fixed, index, originArr) => {
    const rest = originArr.slice(index + 1)
    const restCombination = getCombination(rest, num - 1)
    const fullCombination = restCombination.map((value) => [fixed, ...value])
    result.push(...fullCombination)
  })

  return result
}

function solution(orders, course) {
  const answer = []
  for (let i of course) {
    let max = 0
    const menu = {}
    orders.forEach((v) => {
      getCombination(v.split('').sort(), i).forEach((k) => {
        if (!menu[k]) {
          menu[k] = 1
        } else {
          menu[k] += 1
        }
      })

      for (const x of Object.keys(menu)) {
        if (menu[x] > max) max = menu[x]
      }
    })
    for (const x of Object.keys(menu)) {
      if (max > 1 && menu[x] === max) answer.push(x.split(',').join(''))
    }
  }

  return answer.sort()
}
