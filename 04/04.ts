import {readLines } from "./helper.ts"

const prepareInput = (input: string[]): string[][] =>  input.map((line) => line.split(""))
 
const search = ["X", "M", "A", "S"]

type Pair = [number, number]
const directions: Pair[] = [
  [0, 1],
  [0,-1],
  [-1,0],
  [1,0],
  [1,1],
  [1,-1],
  [-1,1],
  [-1,-1],
]
export const day0401 = async (fileName: string): Promise<number> => {
  const input = await readLines(fileName)
  const preparedInput = prepareInput(input)
  let result = 0
  for(let y = 0; y < preparedInput.length; y++) {
    for(let x = 0; x < preparedInput[0].length; x++) {
      if(preparedInput[y][x] !== "X") {
        continue
      }
      directions.forEach((direction) => {
        if(find(preparedInput, y, x, 0, direction)) {
          result++
        }
      })
    }
  }
  return result
}

const find = (input: string[][], curY: number, curX: number, index: number, direction: Pair): boolean => {
  curX = curX + direction[1]
  curY = curY + direction[0]
  index = index + 1

  if(index === search.length) {
    return true
  }
  if (curX < 0 || curY < 0 || curX >= input[0].length || curY >= input.length) {
    return false
  }
  if (search[index] === input[curY][curX]) {
    return find(input, curY, curX, index, direction)
  }
  return false
}

const find2 = (input: string[][], curY: number, curX: number, direction: Pair, key: string): boolean => {
  curY = curY + direction[0]
  curX = curX + direction[1]

  if (curX < 0 || curY < 0 || curX >= input[0].length || curY >= input.length) {
    return false
  }
  if (input[curY][curX] == key) {
    return true
  }
  return false
}

type SearchFor = [number, number, string][]

export const day0402 = async (fileName: string): Promise<number> => {
  const input = await readLines(fileName)
  const preparedInput = prepareInput(input)
  let result = 0

  const searchFor: SearchFor[] = [
    [
      [-1, -1, "M"],
      [1, 1, "S"],
      [-1, 1, "M"],
      [1, -1, "S"],
    ],
    [
      [-1, -1, "S"],
      [1, 1, "M"],
      [-1, 1, "M"],
      [1, -1, "S"],
    ],
     [
      [-1, -1, "S"],
      [1, 1, "M"],
      [-1, 1, "S"],
      [1, -1, "M"],
    ],  
         [
      [-1, -1, "M"],
      [1, 1, "S"],
      [-1, 1, "S"],
      [1, -1, "M"],
    ],    
  ]

  for(let y = 0; y < preparedInput.length; y++) {
    for(let x = 0; x < preparedInput[0].length; x++) {
      if(preparedInput[y][x] !== "A") {
        continue
      }
      if(searchFor.some((search) =>  search.every((direction) => 
          find2(preparedInput, y, x, [direction[0], direction[1]], direction[2])
      ))) {
        result++
      }
    }
  }
  return result
}
