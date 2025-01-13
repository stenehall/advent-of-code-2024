

type Karta = string[][]
// type Coord = [number, number]
type Area = Set<string>
type Areas = {[key:string]: Area}

const prepareInput = (input: string): Karta => input.split("\n").map(row => row.split(""))

export const day12 = (input: string): number => {
  const data = prepareInput(input)
  const taken = new Set<string>()
  const areas: Areas = {}

  for(let y = 0; y < data.length; y++) {
    for(let x = 0; x < data[y].length; x++) {
      const key = `${y},${x}`
      if (taken.has(key)) {
        continue
      }
      const areaKey = data[y][x] + " - " + key
      areas[areaKey] = flood(data, taken, data[y][x], new Set<string>(), y, x)
    }
  }
  let totalPrice = 0
  for (const key in areas) {
    const area = areas[key]
    const totalArea =area.size
    let perimeter = 0
    area.forEach(coord => {
      const [y, x] = coord.split(",").map(Number)
      if (!area.has(`${y + 1},${x}`)) {
        perimeter++
      }
      if (!area.has(`${y - 1},${x}`)) {
        perimeter++
      }
      if (!area.has(`${y},${x+1}`)) {
        perimeter++
      }
      if (!area.has(`${y},${x-1}`)) {
        perimeter++
      }
    })
    totalPrice += totalArea * perimeter
  }
  return totalPrice
}

const flood = (karta: Karta, taken: Set<string>, search: string, area: Area, y: number, x: number): Area => {
  if(karta[y] && karta[y][x] === search && !taken.has(`${y},${x}`)) {
    const key = `${y},${x}`
    area.add(key)
    taken.add(key)
    area = flood(karta, taken, search, area, y + 1, x)
    area = flood(karta, taken, search, area, y - 1, x)
    area = flood(karta, taken, search, area, y, x + 1)
    area = flood(karta, taken, search, area, y, x - 1)
  }
  return area
}