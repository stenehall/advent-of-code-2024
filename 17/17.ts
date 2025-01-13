// deno-lint-ignore-file no-explicit-any
type Program = {
  A: number
  B: number
  C: number
  P: number[]
}

type FuncReturn = [Program, number, number[]]

const prepareInput = (input: string): Program => {
  const [reg, program] = input.split("\n\n")

  return {
    A: Number(reg.split("\n")[0].slice(12)),
    B: Number(reg.split("\n")[1].slice(12)),
    C: Number(reg.split("\n")[2].slice(12)),
    P: program.slice(9).split(",").map(Number),
  }
}

const combo = (program: Program, instructionPointer: number): number => {
  const com = program.P[instructionPointer + 1]
  if(com < 4) {
    return com
  }
  if(com === 4) {
    return program.A
  }
  if(com === 5) {
    return program.B
  }
  if(com === 6) {
    return program.C
  }
  throw new Error(`Unknown combo ${com}`)
}

const adv = (program: Program, instructionPointer: number): FuncReturn => {
  const numerator = program.A
  const denominator = Math.pow(2,(combo(program, instructionPointer)))
  const result = Math.floor(numerator / denominator)
  program.A = result

  return [program, instructionPointer + 2, []]
}

const bxl = (program: Program, instructionPointer: number): FuncReturn => {

  program.B = program.B ^ program.P[instructionPointer + 1]
  // console.log("bxl", program.B)

  return [program, instructionPointer + 2, []]
}

const bst = (program: Program, instructionPointer: number): FuncReturn => {

  program.B = combo(program, instructionPointer) % 8
  // console.log("bst", program.B)
  
  return [program, instructionPointer + 2, []]
}

const jnz = (program: Program, instructionPointer: number): FuncReturn => {
  let nextInstructionPointer = instructionPointer + 2
  if(program.A !== 0) {
    nextInstructionPointer = program.P[instructionPointer + 1]
  }
  // console.log("jnz", nextInstructionPointer)

  return [program,nextInstructionPointer, []]
}

const bxc = (program: Program, instructionPointer: number): FuncReturn => {
  program.B = program.B ^ program.C
  // console.log("bxc", program.B)

  return [program, instructionPointer + 2, []]
}

const out = (program: Program, instructionPointer: number): FuncReturn => {

  const out = combo(program, instructionPointer) % 8
  // console.log("out", out)

  return [program, instructionPointer + 2, [out]]
}

const bdv = (program: Program, instructionPointer: number): FuncReturn => {
  const numerator = program.A
  const denominator = Math.pow(2,(combo(program, instructionPointer)))
  const result = Math.floor(numerator / denominator)
  program.B = result

  return [program, instructionPointer + 2, []]
}

const cdv = (program: Program, instructionPointer: number): FuncReturn => {
  const numerator = program.A
  const denominator = Math.pow(2,(combo(program, instructionPointer)))
  const result = Math.floor(numerator / denominator)
  program.C = result
  return [program, instructionPointer + 2, []]
}

const Operators = [
  adv,
  bxl,
  bst,
  jnz,
  bxc,
  out,
  bdv,
  cdv
]

export const day1701 = (input: string): [Program, string] => {
  let program = prepareInput(input)
 
  const output: number[] = []
  let instructionPointer = 0
  while (true) {
    if(instructionPointer >= program.P.length) {
      // We've reached the end of the program
      // console.log("End of program")
      break
    }
    const opcode  = program.P[instructionPointer]
    // console.log("Instruction Pointer", instructionPointer, "Opcode", opcode)
    const func = Operators[opcode]
    if(func === undefined) {
      throw new Error(`Unknown opcode ${opcode}`)
    }
    const result = func(program, instructionPointer)
    // console.log("Result", result)
    program = result[0]
    instructionPointer = result[1]
    if(result[2].length > 0) {
      output.push(...result[2])
    }
    // console.log("Program", program)
  }


  return [program, output.join(",")]
}

export const day1702 = (input: string): number => {
  let program = prepareInput(input)
  const original = program.P.join(",")
  let i = 1_00_000_000_000;

  for(; i < 1000_000_000_000; i++) {
    program.A = i
    const output: number[] = []
    let instructionPointer = 0
    while (true) {
      if(instructionPointer >= program.P.length) {
        // We've reached the end of the program
        // console.log("End of program")
        break
      }
      const opcode  = program.P[instructionPointer]
      // console.log("Instruction Pointer", instructionPointer, "Opcode", opcode)
      const func = Operators[opcode]
      if(func === undefined) {
        throw new Error(`Unknown opcode ${opcode}`)
      }
      const result = func(program, instructionPointer)
      // console.log("Result", result)
      program = result[0]
      instructionPointer = result[1]
      if(result[2].length > 0) {
        output.push(...result[2])
        if(!original.startsWith(output.join(","))) {
          break
        }
      }
      // console.log("Program", program)
    }
    if(output.join(",") === original) {
      console.log("FOUND", i)
      break
    }
  }

  return i
}
