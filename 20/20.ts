// deno-lint-ignore-file no-explicit-any
import { debug } from "./helper.ts"

const isDebug = false

type Coord = [number, number]

type Karta = {
  karta: string[][]
  start: Coord,
  goal: Coord
  size: number
}

const prepareInput = (input: string): Karta => {
  const karta: Karta = {
    karta: input.split("\n").map((line) => line.split("")),
    start: [0, 0],
    goal: [0, 0],
    size: 0 
  }
  karta.size = karta.karta.length * karta.karta[0].length

  for(const y in karta.karta) {
    for(const x in karta.karta[y]) {
      if(karta.karta[y][x] === "S") {
        karta.start = [parseInt(y), parseInt(x)]
        break
      }
    }
  }
  for(const y in karta.karta) {
    for(const x in karta.karta[y]) {
      if(karta.karta[y][x] === "E") {
        karta.goal = [parseInt(y), parseInt(x)]
        break
      }
    }
  }


  // console.log(karta.karta.map((line) => line.join("")).join("\n"))
  // console.log("start", karta.start)
  // console.log("goal", karta.goal)

  return karta
}

const POSSIBLE_MOVES: Coord[] = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]

export const day2001 = (input: string): number => {
  const karta = prepareInput(input)

  console.log("We have a map")
  const [picoSeconds, visited] = testMap(karta)
  console.log("We have the first path")
  console.log("We have", visited.length, "steps")
  const possibleSavings: {[key: number]: number} = {}
  // // f
  for(let currentPosition = 0; currentPosition < visited.length; currentPosition++) {
    const coord: Coord = visited[currentPosition]
    karta.karta[coord[0]][coord[1]] = `\x1b[43mx\x1b[0m`
    const walls = []
    for(const move of POSSIBLE_MOVES) {
      const tmp: Coord = [coord[0] + move[0], coord[1] + move[1]]
      if(karta.karta[tmp[0]][tmp[1]] === "#") {
        if(tmp[0] === 0 || tmp[1] === 0 || tmp[1] === karta.karta[0].length - 1 || tmp[0] === karta.karta.length - 1) { 
        } else {
          walls.push(tmp)
        }
      }
    }
    for(const wall of walls) {
      let highestToReplace = -1
      for(const tick in visited) {
        if(visited[tick][0] === coord[0] && visited[tick][1] === coord[1]) {
          continue
        }
        for(const moveIndex of POSSIBLE_MOVES) {
          const tmp: Coord = [visited[tick][0] + moveIndex[0], visited[tick][1] + moveIndex[1]]
          if(tmp[0] === wall[0] && tmp[1] === wall[1]) {
            highestToReplace = parseInt(tick)
          }
        }
      }
      if(highestToReplace === -1) {
        continue
      }
      const newPath = visited.toSpliced(currentPosition, highestToReplace-currentPosition, wall)
      const saved = picoSeconds - newPath.length
      if(saved > 0) {
        if(!possibleSavings[saved]) {
          possibleSavings[saved] = 0
        }
        possibleSavings[saved] += 1
      }
        const tmp = JSON.parse(JSON.stringify(karta.karta))
        newPath.forEach((coord) => {
          tmp[coord[0]][coord[1]] = "\x1b[41m0\x1b[0m"
        })
    }
  }
  let sum = 0
  for(const key in possibleSavings) {
    if(Number(key) >= 100) {
      sum += possibleSavings[key]
    }
  }

  console.log(sum)
  return picoSeconds
}

const testMap = (karta: Karta): [number, Coord[]] => {
  let current = karta.start
  let pico = 0
  const visited:Coord[] = []
  for(let i = 0; i < karta.size; i++) {
    visited.push(current)
    if(current[0] === karta.goal[0] && current[1] === karta.goal[1]) {
      debug(isDebug, "FOUND IT")
      break
    }
    debug(isDebug, "current", current, karta.goal)
    for(const move of POSSIBLE_MOVES) {
      const next: Coord = [current[0] + move[0], current[1] + move[1]]
      debug(isDebug, "testing next", next)
      if(karta.karta[next[0]][next[1]] !== "#" && !inArray(visited, next)) {
        current = next
        // visited.add(current.toString())
        pico += 1
        break
      }
    }
  }
  return [pico, visited]
}

const inArray = (array: Coord[], coord: Coord): boolean => {
  for(const item of array) {
    if(item[0] === coord[0] && item[1] === coord[1]) {
      return true
    }
  }
  return false
}