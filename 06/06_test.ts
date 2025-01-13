import { assertEquals } from "jsr:@std/assert";
import { day0601, day0602 } from "./06.ts"
import { readAll } from "./helper.ts"

Deno.test("test 1", async () => {
  const input = await readAll("input/input06_test1.txt")

  const expected = 41
  const result = await day0601(input)
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const input = await readAll("input/input06.txt")

  const expected = 4776
  const result = await day0601(input)
  assertEquals(result, expected)
})

Deno.test("test 2", async () => {
  const input = await readAll("input/input06_test1.txt")
  
  const expected = 6
  const result = await day0602(input)
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const input = await readAll("input/input06.txt")
  
  const expected = 1586
  const result = await day0602(input)
  assertEquals(result, expected)
})
