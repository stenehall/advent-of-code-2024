// deno-lint-ignore-file no-explicit-any
type Karta = string[][]
type Coord = [number, number]
const START_TILE = "S"
const END_TILE = "E"
const DIRECTIONS: Coord[] = [
  [0, 1], // East
  [1, 0], // South
  [0, -1], // West
  [-1, 0] // North
]
const COST = [1, 1001, 2001, 1001]
type Score = [number, Set<string>[]]

const prepareInput = (input: string): Karta => input.split("\n").map(line => line.split(""))

export const day1601 = (input: string): number => {
  const karta = prepareInput(input)

  const start = findTile(karta, START_TILE)
  const visited = new Map<string, number>()
  const path = new Set<string>()
  const score = pathFind(karta, visited, path, start, 0, 0)

  return score[0]
}

export const day1602 = (input: string): number => {
  const karta = prepareInput(input)

  const start = findTile(karta, START_TILE)
  const visited = new Map<string, number>()
  const path = new Set<string>()
  const score = pathFind(karta, visited, path, start, 0, 0)

  const combinedSets = score[1].reduce((acc, set) => {
    return new Set([...acc, ...set])
  })

  combinedSets.forEach(coord => {
    const [y, x] = coord.split(",").map(Number)
    karta[y][x] = "O"
  })

  return combinedSets.size
}

const pathFind = (karta: Karta, visited: Map<string, number>, path: Set<string>, current: Coord, direction: number, score: number): Score => {
  const haveVisited = visited.get(`${current[0]},${current[1]},${direction}`)
  if(haveVisited && haveVisited < score) {
    return [-1, [path]]
  }

  visited.set(`${current[0]},${current[1]},${direction}`, score)
  path.add(`${current[0]},${current[1]}`)
  
  if(karta[current[0]][current[1]] === END_TILE) {
    return [score, [path]]
  }
  
  const currentScores: Score[] = [[-1, []], [-1, []], [-1, []], [-1, []]]
  for(let i = 0; i < 4; i++) {
    const currentDirection = (direction + i) % 4
    const nextY = current[0] + DIRECTIONS[currentDirection][0]
    const nextX = current[1] + DIRECTIONS[currentDirection][1]
    if(karta[nextY][nextX] !== "#" && !path.has(`${nextY},${nextX}`)) {
      currentScores[currentDirection] = pathFind(karta, visited, new Set(path), [nextY, nextX], currentDirection, score + COST[i])
    }
  }

  const smallest = currentScores.filter(score => score[0] !== -1).reduce((acc: Score, score: Score) => {
    if(acc[0] === -1) {
      return score
    }
    if(score[0] < acc[0]) {
      return score
    }
    if(score[0] === acc[0]) {
      acc[1].push(...score[1])
    }
    return acc
  }, [-1, [new Set<string>()]])
  return smallest
}

const findTile = (karta : Karta, tile: string): Coord => {
  for(let i = 0; i < karta.length; i++) {
    for(let j = 0; j < karta[i].length; j++) {
      if(karta[i][j] === tile) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}