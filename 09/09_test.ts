import { assertEquals } from "jsr:@std/assert";
import { day0901, day0902 } from "./09.ts"
import { readAll } from "./helper.ts"

Deno.test("test 1", async () => {
  const expected = 1928n
  const result = await day0901("2333133121414131402")
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const input = await readAll("input/input09.txt")

  const expected = 6242766523059n
  const result = await day0901(input)
  assertEquals(result, expected)
})

Deno.test("test 2", async () => {
  const expected = 2858n
  const result = await day0902("2333133121414131402")
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const input = await readAll("input/input09.txt")
  const expected = 6272188244509n
  const result = await day0902(input)
  assertEquals(result, expected)
})
