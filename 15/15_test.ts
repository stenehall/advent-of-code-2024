import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day1501 } from "./15.ts"

Deno.test("test 1-1", async () => {
  const expected = 2028
  const input = await readAll("input/input15_test1.txt")
  const result = await day1501(input)
  assertEquals(result, expected)
})

Deno.test("test 1-2", async () => {
  const expected = 10092
  const input = await readAll("input/input15_test2.txt")
  const result = await day1501(input)
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const expected = 1486930
  const input = await readAll("input/input15.txt")
  const result = await day1501(input)
  assertEquals(result, expected)
})
