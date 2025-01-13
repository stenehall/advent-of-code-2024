type Memo = Map<string, number>

export const day11 = (input: string, blinks: number): number => {
  const memo: Memo = new Map<string, number>()
  return input.split(" ").map(Number).reduce((acc, stone) => acc += transpile(memo, stone, blinks), 0)
}

export const transpile = (memo: Memo, stone: number, blinks: number) : number => {
  const key = `${stone}-${blinks}`
  let computed = 0
  if(memo.has(key)) {
    return memo.get(key)!
  } else if (blinks === 0) {
    computed = 1
  } else if(stone === 0) {
    computed = transpile(memo, 1, blinks - 1)
  } else if(String(stone).length % 2 === 0) {
    const strStone = String(stone)
    const left = strStone.substring(0, strStone.length / 2);
    const right = strStone.substring(strStone.length / 2);
    computed = transpile(memo, Number(left), blinks - 1) +  transpile(memo, Number(right), blinks - 1)
  } else {
    computed = transpile(memo, stone * 2024, blinks - 1)
  }
  memo.set(key, computed)
  return computed
}