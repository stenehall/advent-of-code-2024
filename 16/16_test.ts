import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day1601, day1602 } from "./16.ts"

Deno.test("test 1-1", async () => {
  const expected = 7036
  const input = await readAll("input/input16_test1.txt")
  const result = await day1601(input)
  assertEquals(result, expected)
})

Deno.test("test 1-2", async () => {
  const expected = 11048
  const input = await readAll("input/input16_test2.txt")
  const result = await day1601(input)
  assertEquals(result, expected)
})

Deno.test("test 2-1", async () => {
  const expected = 45
  const input = await readAll("input/input16_test1.txt")
  const result = await day1602(input)
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const expected = 143564
  const input = await readAll("input/input16.txt")
  const result = await day1601(input)
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const expected = 593
  const input = await readAll("input/input16.txt")
  const result = await day1602(input)
  assertEquals(result, expected)
})
