import { assertEquals } from "jsr:@std/assert";
import { day0801, day0802 } from "./08.ts"
import { readAll } from "./helper.ts"

Deno.test("test 1", async () => {
  const input = await readAll("input/input08_test1.txt")

  const expected = 14
  const result = await day0801(input)
  assertEquals(result, expected)
})


Deno.test("input 1", async () => {
  const input = await readAll("input/input08.txt")

  const expected = 354 //  484288801 to low, 484288801
  const result = await day0801(input)
  assertEquals(result, expected)
})

Deno.test("test 2", async () => {
  const input = await readAll("input/input08_test1.txt")
  
  const expected = 34
  const result = await day0802(input)
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const input = await readAll("input/input08.txt")
  
  const expected = 1263
  const result = await day0802(input)
  assertEquals(result, expected)
})


