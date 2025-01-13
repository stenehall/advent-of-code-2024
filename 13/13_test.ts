import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day1301, day1302 } from "./13.ts"

Deno.test("test 1", async () => {
  const expected = 480
  const input = await readAll("input/input13_test1.txt")
  const result = await day1301(input)
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const expected = 28262
  const input = await readAll("input/input13.txt")
  const result = await day1301(input)
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const expected = 101406661266314
  const input = await readAll("input/input13.txt")
  const result = await day1302(input)
  assertEquals(result, expected)
})
