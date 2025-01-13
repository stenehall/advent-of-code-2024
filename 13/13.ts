// deno-lint-ignore-file no-explicit-any

type Machine = {
  A: [number, number],
  B :[number, number],
  P: [number, number],
}

const prepareInput = (input: string): Machine[] => {
  // const machines = []

  const machines: Machine[] = input.split("\n\n").map((line) => {
  const reg1 = new RegExp(/Button A: X\+(\d+), Y\+(\d+)/)
  const reg2 = new RegExp(/Button B: X\+(\d+), Y\+(\d+)/)
  const reg3 = new RegExp(/Prize: X=(\d+), Y=(\d+)/)
  const part1 = line.match(reg1)
  const part2 = line.match(reg2)
  const part3 = line.match(reg3)
  return {
    A: [Number(part1![1]), Number(part1![2])],
    B: [Number(part2![1]), Number(part2![2])],
    P: [Number(part3![1]), Number(part3![2])],
  }
  })
  return machines
}

export const day1301 = (input: string): number => {
  const machines = prepareInput(input)
  const cost = machines.map((machine) => {
    const [X, Y] = findXY(machine)
    return X*3 + Y*1
  })
  return cost.reduce((acc, cur) => acc + cur, 0)
}

export const day1302 = (input: string): number => {
  const machines = prepareInput(input)
  const cost = machines.map((machine) => ({
    A: machine.A,
    B: machine.B,
    P: [machine.P[0]+10000000000000, machine.P[1]+10000000000000],
  } as Machine)).map((machine) => {
    const [X, Y] = findXY(machine)
    return X*3 + Y*1
  })
  return cost.reduce((acc, cur) => acc + cur, 0)
}

/*
cramers-rule
D = | A | = a1*b2 - a2*b1
Dx = | C1 B1 | = C1*B1 - C2*B1
     | C2 B2 |
Dy = | A1 C1 | = A1*C2 - A2*C1
     | A2 C2 |
X = Dx / D
Y = Dy / D
*/
const findXY = (machine: Machine): [number, number] => {
  const D = machine.A[0] * machine.B[1] - machine.A[1] * machine.B[0]
  const Dx = machine.P[0] * machine.B[1] - machine.P[1] * machine.B[0]
  const Dy = machine.A[0] * machine.P[1] - machine.A[1] * machine.P[0]
  const X = Dx / D
  const Y = Dy / D

  // No solution
  if (!Number.isInteger(X) || !Number.isInteger(Y)) {
    return [0, 0]
  }
  return [X, Y]
}
