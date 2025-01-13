import {clone} from "./helper.ts"

const prepareInput = (input: string) =>  input.split("\n").map((line) => line.split(""))

const guard = ["^", ">", "v", "<"]
const crate = "#"
const direction = [[-1, 0], [0, 1], [1, 0], [0, -1]] // [Y, X]
const isOut = (y: number, x: number, map: string[][]) => x< 0 || y < 0 || y >= map.length || x >= map[y].length

/* 
    If there is something directly in front of you, turn right 90 degrees.
    Otherwise, take a step forward.
*/
export const day0601 = (input: string): number => {
  const map = prepareInput(input)
  let [y, x, guardDirection] = findStart(map)
  const visited = travelMap(map, y, x, guardDirection)
  return visited.size
}

const findStart = (map : string[][]): [number, number, number] => {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (guard.includes(map[y][x])) {
        return [y, x, guard.indexOf(map[y][x])]
      }
    }
  }
  return [-1, -1, -1]
}

const travelMap = (map: string[][], y: number, x: number, guardDirection: number): Set<string> => {
  const visited = new Set<string>()
  while(true) {
    const nextY = y + direction[guardDirection][0]
    const nextX = x + direction[guardDirection][1]
    if(isOut(nextY, nextX, map)) {
      visited.add(`${y}-${x}`)
      break
    }
    if(map[nextY][nextX] === crate) {
      guardDirection = (guardDirection + 1) % 4
      continue
    } 
    visited.add(`${y}-${x}`)
    y = nextY
    x = nextX
  }
  return visited
}

const testMap = (map: string[][], y: number, x: number, guardDirection: number): boolean => {
  const visited = new Set<string>()
  while(true) {
    const nextY = y + direction[guardDirection][0]
    const nextX = x + direction[guardDirection][1]
    if(isOut(nextY, nextX, map)) {
      return false
    }
    if(map[nextY][nextX] === crate) {
      guardDirection = (guardDirection + 1) % 4
      continue
    } 
    if(visited.has(`${y}-${x}-${guardDirection}`)) {
      return true
    }
    visited.add(`${y}-${x}-${guardDirection}`)
    y = nextY
    x = nextX
  }
  return false
}

export const day0602 = (input: string): number => {
  const map = prepareInput(input)
  let [startY, startX, guardDirection] = findStart(map)

  const visited = travelMap(map, startY, startX, guardDirection)
  let loops = 0
  visited.forEach((posibility) => {
    const [y, x] = posibility.split("-").map(Number)
    if(y === startY && x === startX) {
      return
    }
    if(map[y][x] === crate) {
      return
    }
    const possibleMap = clone(map)
    possibleMap[y][x] = crate
    if(testMap(possibleMap, startY, startX, guardDirection)) {
      loops++
    }
  })

  return loops
}

