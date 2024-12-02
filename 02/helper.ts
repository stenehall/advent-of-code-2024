export const readLines = async (file : string): Promise<string[]> =>  {
  const fileContent = await Deno.readTextFile(file);
  return fileContent.split("\n");
}

// deno-lint-ignore no-explicit-any
export const debug = (isDebug: boolean, ...args: any[]): void => {
  if(isDebug) {
    console.log(...args)
  }
}

// deno-lint-ignore no-explicit-any
export const removeIndex = (arr: any[], index: number): any[] => {
  return arr.slice(0, index).concat(arr.slice(index + 1))
}