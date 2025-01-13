import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day2001 } from "./20.ts"

// Deno.test("test 1-1", async () => {
//   const expected = 84
//   const input = await readAll("input/input20_test1.txt")
//   const result = day2001(input)
//   assertEquals(result, expected)
// })

Deno.test("input 1", async () => {
  const expected = 84
  const input = await readAll("input/input20.txt")
  const result = day2001(input)
  assertEquals(result, expected)
})
