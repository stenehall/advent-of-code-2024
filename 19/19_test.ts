import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day1901, day1902 } from "./19.ts"

Deno.test("test 1-1", async () => {
  const expected = 6
  const input = await readAll("input/input19_test1.txt")
  const result = day1901(input)
  assertEquals(result, expected)
})

Deno.test("test 1-2", async () => {
  const expected = 16
  const input = await readAll("input/input19_test1.txt")
  const result = day1902(input)
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const expected = 290
  const input = await readAll("input/input19.txt")
  const result = day1901(input)
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const expected = 712058625427487
  const input = await readAll("input/input19.txt")
  const result = day1902(input)
  assertEquals(result, expected)
})
