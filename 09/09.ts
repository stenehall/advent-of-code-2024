import { debug, clone } from "./helper.ts"
type File = {
  file: number,
  free: number,
}

const prepareInput = (input: string): File[] => {
  const fileInfo: File[] = []
  const data = input.split("")
  for(let i = 0; i < data.length; i+=2) {
    fileInfo.push({
      file: parseInt(data[i]),
      free: parseInt(data[i+1])
    })
  }
  return fileInfo
}

const findLast = (expandedArray: NumberOrDot[]): number => {
  for(let i = expandedArray.length-1; i > 0; i--) {
    if(expandedArray[i] !== ".") {
      return i
    }
  }
  return 0
}

export const day0901 = (input: string): bigint => {
  const files = prepareInput(input)
  const expanded: NumberOrDot[] = []
  files.forEach((file, i) => {
    for(let j = 0; j < file.file; j++) {
      expanded.push(i)
    }
    for(let j = 0; j < file.free; j++) {
      expanded.push(".")
    }
  })
  for(let i = 0; i < expanded.length; i++) {
    if (expanded[i] === undefined) {
      // debug(isDebug, "End breaking")
      break
    } 
    if (expanded[i] === ".") {
      const takeIndex = findLast(expanded)
      if(takeIndex < i) {
        continue
      }
      // debug(isDebug, "replace", expanded[takeIndex])
      expanded[i] = expanded[takeIndex]
      expanded[takeIndex] = "."
    }
  }

  let sum = 0n
  expanded.forEach((c, i) => {
    if(Number.isInteger(c)) {
      sum += BigInt(i) * BigInt(c)
    }
  })
  return sum
}

type NumberOrDot = "."|number

export const day0902 = (input: string): bigint => {
  const filesystem = input.split("").map(Number).flatMap((length, index) =>
			Array.from({ length }, () =>
				index % 2 === 0 ? index / 2 : -1,
			),
		);

  const biggest = filesystem.findLast((id) => id !== -1) ?? 0

  for(let i = biggest; i > 0; i--) {
    const start = filesystem.findIndex((id) => id === i)
    const end = filesystem.findLastIndex((id) => id === i)
    const size = end - start + 1
    for(let j = 0; j < filesystem.length; j++) {
      if(j > start) {
        break
      }
      if(filesystem[j] === -1) {
        let fits = true
        for(let k = 0; k < size; k++) {
          if(filesystem[j+k] !== -1) {
            fits = false
            break
          }
        }
        if(fits) {
          const block = filesystem.splice(start, size, ...Array.from({ length: size }, () => -1))
          filesystem.splice(j, size, ...block)
          break
        }
      }
    }
  }
  let sum = 0n
  filesystem.forEach((id, i) => {
    if(id !== -1) {
      sum += BigInt(i) * BigInt(id)
    }
  })

  return sum
}