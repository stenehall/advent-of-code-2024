import { assertEquals } from "jsr:@std/assert";
import { day0901, day0902 } from "./10.ts"
import { readAll } from "./helper.ts"


Deno.test("test 1-1", async () => {
  const expected = 36
  const input = await readAll("input/input10_test1.txt")
  const result = await day0901(input)
  assertEquals(result, expected)
})


Deno.test("test 1-2", async () => {
  const expected = 2
  const input = await readAll("input/input10_test2.txt")
  const result = await day0901(input)
  assertEquals(result, expected)
})

Deno.test("test 1-2", async () => {
  const expected = 4
  const input = await readAll("input/input10_test3.txt")
  const result = await day0901(input)
  assertEquals(result, expected)
})

Deno.test("input", async () => {
  const expected = 754
  const input = await readAll("input/input10.txt")
  const result = await day0901(input)
  assertEquals(result, expected)
})

Deno.test("test 2-1", async () => {
  const expected = 3
  const input = await readAll("input/input10_test4.txt")
  const result = await day0902(input)
  assertEquals(result, expected)
})

Deno.test("test 2-2", async () => {
  const expected = 13
  const input = await readAll("input/input10_test5.txt")
  const result = await day0902(input)
  assertEquals(result, expected)
})

Deno.test("test 3-3", async () => {
  const expected = 81
  const input = await readAll("input/input10_test6.txt")
  const result = await day0902(input)
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const expected = 1609
  const input = await readAll("input/input10.txt")
  const result = await day0902(input)
  assertEquals(result, expected)
})