import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day1802, day1801 } from "./18.ts"

// Deno.test("test 1-1", async () => {
//   const expected = 22
//   const input = await readAll("input/input18_test1.txt")
//   const result = await day1801(input, [6,6], 12)
//   assertEquals(result, expected)
// })

// Deno.test("test 1-2", async () => {
//   const expected = [6,1]
//   const input = await readAll("input/input18_test1.txt")
//   const result = await day1802(input, [6,6], 10)
//   assertEquals(result, expected)
// })

// Deno.test("input 1", async () => {
//   const expected = 22
//   const input = await readAll("input/input18.txt")
//   const result = await day1801(input, [70,70], 1024)
//   assertEquals(result, expected)
// })

Deno.test("input 2", async () => {
  const expected = [1,1]
  const input = await readAll("input/input18.txt")
  const result = await day1802(input, [70,70])
  assertEquals(result, expected)
})
