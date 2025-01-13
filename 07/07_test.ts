import { assertEquals } from "jsr:@std/assert";
import { day0701, day0702 } from "./07.ts"
import { readAll } from "./helper.ts"

Deno.test("test 1", async () => {
  const input = await readAll("input/input07_test1.txt")

  const expected = BigInt(3749)
  const result = await day0701(input)
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const input = await readAll("input/input07.txt")

  const expected = BigInt(932137732557) //  484288801 to low, 484288801
  const result = await day0701(input)
  assertEquals(result, expected)
})

Deno.test("test 2", async () => {
  const input = await readAll("input/input07_test1.txt")
  
  const expected = BigInt(11387)
  const result = await day0702(input)
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const input = await readAll("input/input07.txt")
  
  const expected = BigInt(661823605105500)
  const result = await day0702(input)
  assertEquals(result, expected)
})


