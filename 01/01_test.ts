import { assertEquals } from "jsr:@std/assert";
import { day0101, day0102 } from "./01.ts"

Deno.test("test 1", async () => {
  const expected = 11
  const result = await day0101("./input/01_test1.txt")
  assertEquals(result, expected)
})

Deno.test("day 1 task 1", async () => {
  const expected = 1889772
  const result = await day0101("./input/input01.txt")
  assertEquals(result, expected)
})

Deno.test("day 1 task 2", async () => {
  const expected = 23228917
  const result = await day0102("./input/input01.txt")
  assertEquals(result, expected)
})
