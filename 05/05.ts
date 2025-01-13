const prepareInput = (input: string) =>  {
  const [rulesLines, updateLines] = input.split("\n\n")
  const rules = new Map<string, number>()
  rulesLines.split("\n").map(rule => rule.split("|")).forEach(rule => rules.set(`${rule[0]}-${rule[1]}`, -1))
  return {
    ourSort: (a: number, b: number) => rules.has(`${a}-${b}`) ? -1 : 1,
    pages: updateLines.split("\n").map(update => update.split(",").map(Number))
  }
}

export const day0501 = (input: string): number => day05(input, 1)
export const day0502 = (input: string): number => day05(input, 0)

export const day05 = (input: string, x = 1): number => {
  const {ourSort, pages} = prepareInput(input)
  return pages.filter(page => x ^ (page.toString() === page.toSorted(ourSort).toString() ? 0 : 1)).map(page => page.toSorted(ourSort)).reduce((acc,page) => acc += page[page.length / 2 | 0], 0)
}