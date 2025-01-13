import { assertEquals } from "jsr:@std/assert";
import { day0501, day0502 } from "./05.ts"
import { readAll } from "./helper.ts"

Deno.test("test 1", async () => {
  const input = await readAll("input/input05_test1.txt")

  const expected = 143
  const result = await day0501(input)
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const input = await readAll("input/input05.txt")

  const expected = 6242
  const result = await day0501(input)
  assertEquals(result, expected)
})

Deno.test("test 2", async () => {
  const input = await readAll("input/input05_test1.txt")
  
  const expected = 123
  const result = await day0502(input)
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const input = await readAll("input/input05.txt")
  
  const expected = 5169
  const result = await day0502(input)
  assertEquals(result, expected)
})
