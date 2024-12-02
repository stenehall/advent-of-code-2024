import {readLines} from "./helper.ts"

export const day0101 = async (fileName: string): Promise<number> => {
  const input = await readLines(fileName)
  const [a, b] = prepareInput(input)

  a.sort()
  b.sort()

  return a.reduce((acc, curr, index) => acc + Math.abs(b[index] - curr), 0)
}

export const day0102 = async (fileName: string): Promise<number> => {
  const input = await readLines(fileName)
  const [a, b] = prepareInput(input)
  
  a.sort()
  const bMap = new Map<number, number>()
  b.forEach((value) => {
    if (bMap.has(value)) {
      bMap.set(value, bMap.get(value)! + 1)
    } else {
      bMap.set(value, 1)
    }
  })

  return a.reduce((acc, curr) => acc + curr * (bMap.get(curr) ?? 0), 0)  
}

const prepareInput = (input: string[]): number[][] => {
  const a: number[] = []
  const b: number[] = []

  input.forEach((line) => {
    const [first, second] = line.split("   ")
    a.push(Number(first))
    b.push(Number(second))
  })
  return [a, b]
}
