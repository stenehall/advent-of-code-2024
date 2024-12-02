import {readLines, removeIndex } from "./helper.ts"

const prepareInput = (input: string[]): number[][] => input.map((line) => line.split(" ").map((n) => parseInt(n)))

export const day0201 = async (fileName: string): Promise<number> => {
  const input = await readLines(fileName)
  const levels = prepareInput(input)
  let isSafe = 0

  for(let i = 0; i < levels.length; i++) {
    if(checkIfLevelIsSave(levels[i])) {
      isSafe++
    }
  }
  return isSafe
}

export const day0202 = async (fileName: string): Promise<number> => {
  const input = await readLines(fileName)
  const levels = prepareInput(input)
  let isSafe = 0

  for(let i = 0; i < levels.length; i++) {
    // then check each possible combination
    for(let j = 0; j < levels[i].length; j++) {
      if(checkIfLevelIsSave(removeIndex(levels[i], j))) {
        isSafe++
        break
      }
    }
  }
  return isSafe
}

const checkIfLevelIsSave = (level: number[]): boolean => {
  const isAscending = level[0] < level[1]

  for (let i = 0; i < level.length - 1; i++) {
    const isStillAscending = level[i] < level[i + 1]
    const pairDiff = Math.abs(level[i] - level[i + 1])
   
    if (isAscending !== isStillAscending) {
      return false
    }
    if(pairDiff === 0) {
      return false
    }
    if(pairDiff > 3) {
      return false
    }
  }
  return true
}