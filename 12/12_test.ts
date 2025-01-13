import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day12 } from "./12.ts"

// Deno.test("test 1-1", async () => {
//   const expected = 7
//   const input = await readAll("input/input12_test1.txt")
//   const result = await day12(input)
//   assertEquals(result, expected)
// })

Deno.test("test 1-2", async () => {
  const expected = 772
  const input = await readAll("input/input12_test2.txt")
  const result = await day12(input)
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const expected = 772
  const input = await readAll("input/input12.txt")
  const result = await day12(input)
  assertEquals(result, expected)
})
