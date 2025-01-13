// deno-lint-ignore-file no-explicit-any

type Coord = [number, number]

const prepareInput = (input: string): Coord[] => {
  return input.split("\n").map((line) => {
    const [x, y] = line.split(",").map(Number)
    return [y, x] as Coord
  })
}

export const day1801 = (input: string, goal: Coord, bytes: number): number => {
  const karta = Array.from({ length: goal[0]+1 }, () => Array.from({ length: goal[1]+1 }, () => "."))
  const lines = prepareInput(input)

  lines.forEach((line, index) => {
    if(index < bytes) {
      karta[line[0]][line[1]] = "#"
    }
  })
  
  
  const visited = new Map<string, number>()
  const path = new Set<string>()
  path.add([0,0].toString())
  const foundPath = findPath(karta, visited, path, [0,0], goal)
  
  foundPath.forEach((coord) => {
    const [x, y] = coord.split(",").map(Number)
    karta[x][y] = "O"
  })
  // console.log(karta.map((line) => line.join("")).join("\n"))
  

  // We're saving 0,0 as well, so we need to subtract 1
  return foundPath.size - 1
}

export const day1802 = (input: string, goal: Coord): Coord => {
  const karta = Array.from({ length: goal[0]+1 }, () => Array.from({ length: goal[1]+1 }, () => "."))
  const lines = prepareInput(input)

  // 4900
  // 4900/2 = 2450
  // 2450/2 = 1225
  // 1225/2 = 612
  // 612/2 = 306
  // 306/2 = 153
  // 153/2 = 76
  // 76/2 = 38
  // 38/2 = 19
  // 19/2 = 9
  // 9/2 = 4
  const testIndex = 2450 + 306 + 153 + 76 + 38 + 9 + 4 + 2 + 1 + 1

  lines.forEach((line, index) => {
    if(index < testIndex) {
      karta[line[0]][line[1]] = "#"
    }
  })
  const visited = new Map<string, number>()
  const path = new Set<string>()
  path.add([0,0].toString())
  const foundPath = findPath(karta, visited, path, [0,0], goal)
  if(foundPath.size === 0) {
    console.log("No path found")
  } else {
    console.log("Found path", testIndex)
  }

  // foundPath.forEach((coord) => {
  //   const [x, y] = coord.split(",").map(Number)
  //   karta[x][y] = "O"
  // })
  // console.log("lines", i)
  // console.log(lines)
  // We're saving 0,0 as well, so we need to subtract 1
  return [lines[testIndex-1][1], lines[testIndex-1][0]]
}

const findPath = (karta: string[][], visited: Map<string, number>, path: Set<string>, start: Coord, goal: Coord): Set<string> => {
  const haveVisited = visited.get(start.toString())
  if(haveVisited && haveVisited <= path.size) {
    // console.log(path.size / (goal[0] * goal[1]), path)
    // console.log("Already visited", start, path.size, haveVisited)
    return new Set<string>()
  }
  visited.set(start.toString(), path.size)
  if(start[0] === goal[0] && start[1] === goal[1]) {
    return path
  }

  let shortestPath = new Set<string>()

  let [y, x] = [start[0] - 1, start[1]]
  if(karta[y] && karta[y][x] === "." && !path.has([y, x].toString())) {
    const newPath = new Set(path)
    newPath.add([start[0]-1, start[1]].toString())
    const foundPath = findPath(karta, visited, newPath, [start[0]-1, start[1]], goal)
    if(shortestPath.size === 0 || (foundPath.size > 0 && foundPath.size < shortestPath.size)) {
      shortestPath = foundPath
    }
  }
  [y, x] = [start[0] + 1, start[1]]
  if(karta[y] && karta[y][x] === "." && !path.has([y, x].toString())) {
    const newPath = new Set(path)
    newPath.add([start[0]+1, start[1]].toString())
    const foundPath = findPath(karta, visited, newPath, [start[0]+1, start[1]], goal)
    if(shortestPath.size === 0 || (foundPath.size > 0 && foundPath.size < shortestPath.size)) {
      shortestPath = foundPath
    }
  }
  [y, x] = [start[0], start[1]-1]
  if(karta[y] && karta[y][x] === "." && !path.has([y, x].toString())) {
    const newPath = new Set(path)
    newPath.add([start[0], start[1]-1].toString())
    const foundPath = findPath(karta, visited, newPath, [start[0], start[1]-1], goal)
    if(shortestPath.size === 0 || (foundPath.size > 0 && foundPath.size < shortestPath.size)) {
      shortestPath = foundPath
    }
  }
  [y, x] = [start[0], start[1]+1]
  if(karta[y] && karta[y][x] === "." && !path.has([y, x].toString())) {
    const newPath = new Set(path)
    newPath.add([start[0], start[1]+1].toString())
    const foundPath = findPath(karta, visited, newPath, [start[0], start[1]+1], goal)
    if(shortestPath.size === 0 || (foundPath.size > 0 && foundPath.size < shortestPath.size)) {
      shortestPath = foundPath
    }
  }

  return shortestPath
}