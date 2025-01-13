type Line = {
  sum: number
  firstElement: number
  elements: number[]
}
type Operator = ((a: number, b: number) => number)

const prepareInput = (input: string): Line[] => {
  return input.split("\n").map(line => {
    const [sum, parts] = line.split(":")
    const elements = parts.trim().split(" ").map(part => parseInt(part))
    const firstElement = elements.shift()!
    return {
      sum: parseInt(sum),
      firstElement,
      elements
    }
  })
}

const day07 = (input: string, operators: Operator[]): bigint => prepareInput(input).filter(({sum, firstElement,elements}) => {
    return recursiveMatch(operators, sum, firstElement, elements)
  }).reduce((acc, match) => acc + BigInt(match.sum), 0n)

const recursiveMatch = (operators: Operator[], target: number , acc: number, part: number[]): boolean => {
  const [firstPart, ...cloned] = part
  for (const operator of operators) {
    if(cloned.length === 0 ? operator(acc, firstPart) === target : recursiveMatch(operators, target, operator(acc, firstPart), cloned)) {
      return true
    }
  }
  return false
}

export const day0701 = (input: string): bigint => {
  const operators: Operator[] = [
    (a, b) => a + b,
    (a, b) => a * b
  ]
  return day07(input, operators)
}

export const day0702 = (input: string): bigint => {
  const operators: Operator[] = [
    (a, b) => a + b,
    (a, b) => a * b,
    (a, b) => parseInt(`${a}${b}`)
  ]
  return day07(input, operators)
}
