import { assertEquals } from "jsr:@std/assert";
import { day0401, day0402 } from "./04.ts"

// Deno.test("test 1", async () => {
//   const expected = 18
//   const result = await day0401("input/input04_test1.txt")
//   assertEquals(result, expected)
// })

// Deno.test("input 1", async () => {
//   const expected = 2517
//   const result = await day0401("input/input04.txt")
//   assertEquals(result, expected)
// })

Deno.test("test 2", async () => {
  const expected = 9
  const result = await day0402("input/input04_test2.txt")
  assertEquals(result, expected)
})

// Deno.test("input 2", async () => {
//   const expected = 1960
//   const result = await day0402("input/input04.txt")
//   assertEquals(result, expected)
// })
