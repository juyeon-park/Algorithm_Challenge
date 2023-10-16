function solution(dirs) {
  let start = [0, 0]
  const visited = []
  const direction = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  }

  for (let i of dirs) {
    const move = [start[0] + direction[i][0], start[1] + direction[i][1]]

    if (Math.abs(move[0]) > 5 || Math.abs(move[1]) > 5) continue

    visited.push('' + start[0] + start[1] + move[0] + move[1])
    visited.push('' + move[0] + move[1] + start[0] + start[1])

    start = move
  }
  return new Set(visited).size / 2
}
