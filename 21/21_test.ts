import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day2101 } from "./21.ts"

Deno.test("test 1", () => {
  const expected = "<vA<AA>>^AvAA<^A>A<v<A>>^AvA^A<vA>^A<v<A>^A>AAvA^A<v<A>A>^AAAvA<^A>A"
  const result = day2101("029A")
  assertEquals(result, expected)
})
