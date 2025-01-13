// deno-lint-ignore-file no-explicit-any

type Karta = {
  towels: string[],
  patterns: string[],
}

const prepareInput = (input: string): Karta => ({
    towels: input.split("\n\n")[0].split(", "),
    patterns: input.split("\n\n")[1].split("\n")
})

export const day1901 = (input: string): number => {
  const lines = prepareInput(input)

  let success = 0
  for(const pattern of lines.patterns) {
    const towels = lines.towels.filter((a) => pattern.includes(a))
    if(isMatching(towels, pattern, new Map<string,number>())) {
      success++
    }
  }
  return success
}

export const day1902 = (input: string): number => {
  const lines = prepareInput(input)

  let success = 0
  for(const pattern of lines.patterns) {
    const towels = lines.towels.filter((a) => pattern.includes(a))
    success += isMatching(towels, pattern, new Map<string,number>())
  }
  return success
}

const isMatching = (towels: string[], pattern: string, cache: Map<string,number>): number => {
  let count = 0
  if(cache.has(pattern)) {
    return cache.get(pattern)!
  }
  if(pattern.length === 0) {
    return 1
  }
  for(const towel of towels) {
    if(pattern.startsWith(towel)) {
      count += isMatching(towels, pattern.slice(towel.length), cache)
      cache.set(pattern, count)
    }
  }
  return count
}