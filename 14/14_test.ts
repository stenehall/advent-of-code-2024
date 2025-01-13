import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day1401, day1402 } from "./14.ts"

// Deno.test("test 1-1", async () => {
//   const expected = 7
//   const input = await readAll("input/input14_test1.txt")
//   const result = await day14(input)
//   assertEquals(result, expected)
// })

// Deno.test("test 1", async () => {
//   const expected = 12
//   const input = await readAll("input/input14_test1.txt")
//   const result = await day14(input, 100, 11, 7)
//   assertEquals(result, expected)
// })

// Deno.test("input 1", async () => {
//   const expected = 214109808 // wrong 226438344 214109808
//   const input = await readAll("input/input14.txt")
//   const result = await day1401(input, 100, 101, 103)
//   assertEquals(result, expected)
// })

Deno.test("input 2", async () => {
  const expected = 10 // wrong 226438344 214109808
  const input = await readAll("input/input14.txt")
  const result = await day1402(input, 10000, 101, 103)
  assertEquals(result, expected)
})
