import { clone } from "./helper.ts"
// deno-lint-ignore-file no-explicit-any no-explicit-any no-explicit-any no-explicit-any no-explicit-any
type Karta = number[][]
type Point = [number, number]

const prepareInput = (input: string): Karta => {
  const data = input.split("\n")
    .map((line) => line.split("")
    .map(point => !isNaN(Number(point)) ? Number(point) : -1))
  // console.log(data)
  return data
}

const startingPoints = (data: Karta): Point[] => {
  const points: Point[] = []
  for(let i = 0; i < data.length; i++) {
    for(let j = 0; j < data[i].length; j++) {
      if(data[i][j] === 0) {
        points.push([i, j])
      }
    }
  }
  return points
}

const findPath = (found: Map<string, number>, map: Karta, searchHeight: number, path: Point[]): any => {
  const [y, x] = path[path.length-1]

  if(map[y][x] !== searchHeight) {
    return found
  }
  if(searchHeight === 9) {
    let cur = found.get(`${y}-${x}`)
    if(!cur) {
      cur = 0
    }
    found.set(`${y}-${x}`, cur+1)
    return found
  }

  if(y-1 >= 0 && !inArray(path, [y-1, x]) && map[y-1][x] === searchHeight+1) {
    found = findPath(found, map, searchHeight+1, [...path, [y-1, x]])
  }
  if(y+1 < map.length && !inArray(path, [y+1, x]) && map[y+1][x] === searchHeight+1) {
    found = findPath(found, map, searchHeight+1, [...path, [y+1, x]])
  }
  if(x-1 >= 0 && !inArray(path, [y, x-1]) && map[y][x-1] === searchHeight+1) {
    found = findPath(found, map, searchHeight+1, [...path, [y, x-1]])
  }
  if(x+1 < map[0].length && !inArray(path, [y, x+1]) && map[y][x+1] === searchHeight+1) {
    found = findPath(found, map, searchHeight+1, [...path, [y, x+1]])
  }
  return found
}

const inArray = (array: Point[], point: Point): boolean => {
  for(let i = 0; i < array.length; i++) {
    if(array[i][0] === point[0] && array[i][1] === point[1]) {
      return true
    }
  }
  return false
}


export const day0901 = (input: string): number => {
  const map = prepareInput(input)
  const points = startingPoints(map)
  let totalScores = 0
  points.forEach((point) => {
    const foundSet = findPath(new Map<string, number>(), map, 0, [point])
      totalScores += foundSet.size
  })
  return totalScores
}

export const day0902 = (input: string): number => {
  const map = prepareInput(input)
  const points = startingPoints(map)
  let totalScores = 0
  points.forEach((point) => {
    const foundSet = findPath(new Map<string, number>(), map, 0, [point])
      foundSet.forEach((item: any) => {
        // console.log(item)
        totalScores += item
      })
  })
  return totalScores
}