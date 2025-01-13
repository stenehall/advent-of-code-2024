// deno-lint-ignore-file no-explicit-any
type Karta = string[][]
type Moves = string[]

const prepareInput = (input: string): [Karta, Moves] => {
  const [karta, moves] = input.split("\n\n")
  return [
    karta.split("\n").map(row => row.split("")),
    moves.replaceAll("\n", "").split("")
  ]
}

export const day1501 = (input: string): number => {
  let [karta, moves] = prepareInput(input)

  // console.log(moves)

  // console.log(moves)

  moves.forEach(move => {
    tick(karta, move)
  })
  // console.log(karta.map(row => row.join("")).join("\n"))

  let sum = 0
  karta.forEach((row, y) => row.forEach((cell, x) => {
    if(cell === "O") {
      sum += 100 * y + x
    }
  }))

  return sum
}

const transform: {[key:string]: [number, number]} = {
  "^": [-1,0], // Y, X
  "v": [1,0],
  "<": [0,-1],
  ">": [0,1]
}

const yx = (karta: Karta): [number, number] => {
  for (let y = 0; y < karta.length; y++) {
    for (let x = 0; x < karta[y].length; x++) {
      if (karta[y][x] === "@") {
        return [y, x]
      }
    }
  }
  throw new Error("No @ found")
}

const tick = (karta: Karta, move: string): Karta => {
  const offset = transform[move]
  const [y, x] = yx(karta)
  const possibleY = y + offset[0]
  const possibleX = x + offset[1]
  // console.log("")
  // console.log("Move ", move, offset, karta[possibleY][possibleX])
  if(karta[possibleY][possibleX] === ".") {
    karta[y][x] = "."
    karta[possibleY][possibleX] = "@"
  }
  if(karta[possibleY][possibleX] === "O") {
    // console.log("WE're here")
    if(moveAt(karta, offset, possibleY, possibleX)) {
      karta[y][x] = "."
      karta[possibleY][possibleX] = "@"
    }
  }
  return karta
}

const moveAt = (karta: Karta, directory: [number, number], y: number, x: number): boolean => {
  const possibleY = y + directory[0]
  const possibleX = x + directory[1]
  // console.log("MoveAt", possibleY, possibleX, karta[possibleY][possibleX])
  if(karta[possibleY][possibleX] === ".") {
    // console.log("We have a . after the O")
    karta[y][x] = "."
    karta[possibleY][possibleX] = "O"
    return true
  } else if (karta[possibleY][possibleX] === "O") {
    if(moveAt(karta, directory, possibleY, possibleX)) {
      karta[y][x] = "."
      karta[possibleY][possibleX] = "O"
      return true
    }
  }
  return false
}