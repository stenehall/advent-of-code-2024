import { assertEquals } from "jsr:@std/assert";
import { day0201, day0202 } from "./02.ts"

Deno.test("test 1", async () => {
  const expected = 2
  const result = await day0201("input/input02_test1.txt")
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const expected = 299
  const result = await day0201("input/input02.txt")
  assertEquals(result, expected)
})

Deno.test("test 2", async () => {
  const expected = 4
  const result = await day0202("input/input02_test1.txt")
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const expected = 364
  const result = await day0202("input/input02.txt")
  assertEquals(result, expected)
})
