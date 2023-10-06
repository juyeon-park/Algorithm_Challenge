function solution(people, limit) {
  let answer = 0
  people.sort((a, b) => b - a)

  let pLength = people.length - 1
  for (let i = 0; i <= pLength; i++) {
    if (people[i] + people[pLength] <= limit) {
      pLength -= 1
    }
    answer += 1
  }
  return answer
}
