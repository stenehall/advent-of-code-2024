// deno-lint-ignore-file no-explicit-any

const isDebug = false


export const day2101 = (input: string): string => {
  const parsed = input.slice(0,-1).split("").map(Number)
  console.log(parsed)

  return "<vA<AA>>^AvAA<^A>A <v<A>>^AvA^A <vA>^A <v<A>^A>AAvA^A<v<A>A>^AAAvA<^A>A"
}

const leftClick = "<vA<AA>>^AvAA<^A>A"
const uoClick = "<v<A>>^AvA^A"
const right = "<vA>^A"


/*
+---+---+---+
| 7 | 8 | 9 |
+---+---+---+
| 4 | 5 | 6 |
+---+---+---+
| 1 | 2 | 3 |
+---+---+---+
    | 0 | A |
    +---+---+

    +---+---+
    | ^ | A |
+---+---+---+
| < | v | > |
+---+---+---+


    +---+---+
    | ^ | A |
+---+---+---+
| < | v | > |
+---+---+---+
*/