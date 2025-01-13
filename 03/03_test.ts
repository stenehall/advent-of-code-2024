import { assertEquals } from "jsr:@std/assert";
import { day0301, day0302 } from "./03.ts"

Deno.test("test 1", async () => {
  const expected = 161
  const result = await day0301("xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))")
  assertEquals(result, expected)
})

Deno.test("test 2", async () => {
  const expected = 48
  const result = await day0302("xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))")
  assertEquals(result, expected)
})

Deno.test("input 1", async () => {
  const expected = 188741603
  const fileContent = await Deno.readTextFile("input/input03.txt");
  const result = await day0301(fileContent)
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const expected = 67269798
  const fileContent = await Deno.readTextFile("input/input03.txt");
  const result = await day0302(fileContent)
  assertEquals(result, expected)
})