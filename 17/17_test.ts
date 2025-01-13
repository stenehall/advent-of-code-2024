import { assertEquals } from "jsr:@std/assert";
import { readAll } from "./helper.ts"
import { day1702 } from "./17.ts"

// Deno.test("test 1-1", async () => {
//   const expected = "4,6,3,5,6,3,5,2,1,0"
//   const input = await readAll("input/input17_test1.txt")
//   const result = await day1701(input)
//   assertEquals(result[1], expected)
// })

// Deno.test("input 1", async () => {
//   const expected = "7,3,5,7,5,7,4,3,0"
//   const input = await readAll("input/input17.txt")
//   const result = await day1701(input)
//   assertEquals(result[1], expected)
// })

// //If register A contains 10, the program 5,0,5,1,5,4 would output 0,1,2
// Deno.test("test 1-2", async () => {
//   const expected = "0,1,2"
//   const result = await day1701(
// `Register A: 10
// Register B: 0
// Register C: 0

// Program: 5,0,5,1,5,4`)
//   assertEquals(result[1], expected)
// })

// // If register C contains 9, the program 2,6 would set register B to 1.
// Deno.test("test 1-2", async () => {
//   const expected = 1
//   const result = await day1701(
// `Register A: 0
// Register B: 0
// Register C: 9

// Program: 2,6`)
//   assertEquals(result[0].B, expected)
// })

// // If register B contains 29, the program 1,7 would set register B to 26.
// Deno.test("test 1-3", async () => {
//   const expected = 26
//   const result = await day1701(
// `Register A: 0
// Register B: 29
// Register C: 0

// Program: 1,7`)
//   assertEquals(result[0].B, expected)
// })

// // If register B contains 2024 and register C contains 43690, the program 4,0 would set register B to 44354
// Deno.test("test 1-3", async () => {
//   const expected = 44354
//   const result = await day1701(
// `Register A: 0
// Register B: 2024
// Register C: 43690

// Program: 4,0`)
//   assertEquals(result[0].B, expected)
// })

// // If register A contains 2024, the program 0,1,5,4,3,0 would output 4,2,5,6,7,7,7,7,3,1,0 and leave 0 in register A.
// Deno.test("test 1-3", async () => {
//   const result = await day1701(
// `Register A: 2024
// Register B: 0
// Register C: 0

// Program: 0,1,5,4,3,0`)
//   assertEquals(result[1], "4,2,5,6,7,7,7,7,3,1,0")
//   assertEquals(result[0].A, 0)
// })


// Deno.test("test 1-2", async () => {
//   const expected = 117440
//   const result = await day1702(
// `Register A: 117440
// Register B: 0
// Register C: 0

// Program: 0,3,5,4,3,0`)
//   assertEquals(result, expected)
// })

Deno.test("input 2", async () => {
  const expected = 117440
  const result = await day1702(
`Register A: 61156655
Register B: 0
Register C: 0

Program: 2,4,1,5,7,5,4,3,1,6,0,3,5,5,3,0`)
  assertEquals(result, expected)
})


