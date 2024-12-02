import {readLines} from "./helper.ts"

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
    if(checkIfLevelIsSave2(levels[i], 0)) {
      isSafe++
    }
  }
  return isSafe
}


const checkIfLevelIsSave = (level: number[]): boolean => {
  const isAscending = level[0] < level[1]
  for (let i = 0; i < level.length - 1; i++) {
    // Is the values all increase or decrease?
    const isStillAscending = level[i] < level[i + 1]
    if (isAscending !== isStillAscending) {
      return false
    }
    if(level[i] === level[i + 1]) {
      return false
    }
    if(Math.abs(level[i] - level[i + 1]) > 3) {
      return false
    }
  }

  return true
}

const checkIfLevelIsSave2 = (level: number[], errorCount: number): boolean => {
  const isAscending = level[0] < level[1]

  // 1 2 7 8 9
  // [1 2] 7 8 9

  // 1 [2 7] 8 9
  // 1 2 [7 8] 9

  // [1 7] 8 9

  if(errorCount > 1) {
    return false
  }

  for (let i = 0; i < level.length - 1; i++) {
    // Is the values all increase or decrease?
    const isStillAscending = level[i] < level[i + 1]
    if (isAscending !== isStillAscending) {
      return checkIfLevelIsSave2(level.slice(0, i).concat(level.slice(i+1)), errorCount + 1) || checkIfLevelIsSave2(level.slice(0, i+1).concat(level.slice(i+2)), errorCount + 1)
    }
    if(level[i] === level[i + 1]) {
      return checkIfLevelIsSave2(level.slice(0, i).concat(level.slice(i+1)), errorCount + 1) || checkIfLevelIsSave2(level.slice(0, i+1).concat(level.slice(i+2)), errorCount + 1)
    }
    if(Math.abs(level[i] - level[i + 1]) > 3) {
      return checkIfLevelIsSave2(level.slice(0, i).concat(level.slice(i+1)), errorCount + 1) || checkIfLevelIsSave2(level.slice(0, i+1).concat(level.slice(i+2)), errorCount + 1)
    }
  }

  return true
}