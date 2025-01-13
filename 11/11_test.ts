import { assertEquals } from "jsr:@std/assert";
import { day11 } from "./11.ts"

Deno.test("test 1-1", async () => {
  const expected = 7
  const result = await day11("0 1 10 99 999", 1)
  assertEquals(result, expected)
})

Deno.test("test 1-2", async () => {
  const expected = 3
  const result = await day11("125 17", 1)
  assertEquals(result, expected)
})

Deno.test("test 1-3", async () => {
  const expected = 22
  const result = await day11("125 17", 6)
  assertEquals(result, expected)
})

Deno.test("test 1-4", async () => {
  const expected = 55312
  const result = await day11("125 17", 25)
  assertEquals(result, expected)
})


Deno.test("input 1", async () => {
  const expected = 204022
  // const input = await readAll("input/input10_test1.txt")
  const result = await day11("0 37551 469 63 1 791606 2065 9983586", 25) // 204022 fel
  assertEquals(result, expected)
})

Deno.test("input 2", async () => {
  const expected = 241651071960597
  const result = await day11("0 37551 469 63 1 791606 2065 9983586", 75) // 204022 fel
  assertEquals(result, expected)
})
