export const readLines = async (file : string): Promise<string[]> =>  {
  const fileContent = await Deno.readTextFile(file);
  return fileContent.split("\n");
}
