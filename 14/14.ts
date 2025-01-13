// deno-lint-ignore-file no-explicit-any
type Robot = {
  p: [number, number],
  v: [number, number],
}
const prepareInput = (input: string): Robot[] => {
  const reg = new RegExp(/p=(-?\d+),(-?\d+) v=(-?\d+),(-?\d+)/)
  const robots: Robot[] = input.split("\n").map(row => {
    const parts = row.match(reg)
    if(parts) {
      return {
        p: [Number(parts[1]), Number(parts[2])],
        v: [Number(parts[3]), Number(parts[4])]
      } as Robot
    }
  }).filter(Boolean) as Robot[]
  return robots
}

export const day1401 = (input: string, ticks: number, width: number, height: number): number => {
  let robots = prepareInput(input)

  for(let i = 0; i < ticks; i++) {
    robots = tick(robots, width, height)
  }

  return sum(robots, width, height)
}

export const day1402 = (input: string, ticks: number, width: number, height: number): number => {
  let robots = prepareInput(input)

  for(let i = 0; i < ticks; i++) {
    robots = tick(robots, width, height)
    const unique = new Set<string>()
    robots.forEach(robot => {
      unique.add(`${robot.p[0]},${robot.p[1]}`)
    })
    if (unique.size === robots.length) {
      console.log("found", i+1)
      print(robots, width, height)
      return i+1
    }
  }
  return -1
}

const print = (robots: Robot[], width: number, height: number) => {
  console.log("height", height, "width", width)
  const grid = Array(height).fill(0).map(() => Array(width).fill("."))
  robots.forEach(robot => {
    // console.log(robot.p)
    if(grid[robot.p[1]][robot.p[0]] === ".") {
      grid[robot.p[1]][robot.p[0]] = 0
    }
    grid[robot.p[1]][robot.p[0]] += 1
  })
  console.log(grid.map(row => row.join("")).join("\n"))
}

const tick = (robots: Robot[], width: number, height: number): Robot[] => {
    robots.forEach(robot => {
    // for(let i = 0; i < ticks; i++) {
      let x = robot.p[0] + robot.v[0]
      let y = robot.p[1] + robot.v[1]
      if(x < 0) {
        x = width + x
      }
      if(x >= width) {
        x = x - width
      }
      if(y < 0) {
        y = height + y
      }
      if(y >= height) {
        y = y - height
      }
      robot.p = [x, y]
    })
  // })
  return robots
}

const sum = (robots: Robot[], width: number, height: number): number => {
  const middleHeight = Math.ceil((height -1) / 2)
  const middleWidth = Math.ceil((width - 1) / 2)
    const s = [0,0,0,0]

    robots.forEach(robot => {
    // console.log("---------------------")
    // console.log(robot.p)
    if(robot.p[0] < middleWidth && robot.p[1] < middleHeight) {
      // console.log("0")
      s[0]++
    }
    if(robot.p[0] > middleWidth && robot.p[1] < middleHeight) {
      // console.log("1")
      s[1]++
    }
    if(robot.p[0] < middleWidth && robot.p[1] > middleHeight) {
      // console.log("2")
      s[2]++
    }
    if(robot.p[0] > middleWidth && robot.p[1] > middleHeight) {
      // console.log("3")
      s[3]++
    }
  })

  return s[0] * s[1] * s[2] * s[3]
}