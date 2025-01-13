
export const day0301 = (mul: string): number => {
  const allMul = new RegExp(/mul\((\d+),(\d+)\)/g)
  let total = 0
  const matches = mul.matchAll(allMul)
  matches.forEach(si => {
    if(si[1] && si[2]) {
      total += parseInt(si[1]) * parseInt(si[2])
    }
  })
  return total
}

export const day0302 = (mul: string): number => {
  const allMul = new RegExp(/(mul\((\d+),(\d+)\))|do\(\)|don\'t\(\)/g)
  let shouldSum = true
  // let total = 0
  // const matches = mul.matchAll(allMul)
  const total = mul.matchAll(allMul).reduce((acc, si) => {
    if(si[0] === "do()") {
      shouldSum = true
      return
    }
    if(si[0] === "don't()") {
      shouldSum = false
      return
    }
    if(shouldSum && si[2] && si[3]) {
      return acc + parseInt(si[2]) * parseInt(si[3])
    }
  }, 0)
  return total
}
