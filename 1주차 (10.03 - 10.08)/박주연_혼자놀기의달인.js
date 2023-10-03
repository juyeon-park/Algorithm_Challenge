/*
 * [lv.2] 혼자놀기의 달인
 * https://school.programmers.co.kr/learn/courses/30/lessons/131130
 */

function solution(cards) {
  const box = [...cards]
  const group = []

  for (let i = 0; i < box.length; i++) {
    if (box[i] !== 0) dfs(box[i], [])
  }

  group.sort((a, b) => b - a)
  return group[1] ? group[0] * group[1] : 0

  function dfs(boxNum, tmpArr) {
    let tmpCard = box[boxNum - 1]
    box[boxNum - 1] = 0

    if (tmpCard === 0) return group.push(tmpArr.length)

    return dfs(tmpCard, [...tmpArr, tmpCard])
  }
}
