type Antenna = [number, number]
type Collection = {
  "Type": string,
  antennas: Antenna[]
}
type Antennas = {[key:string]: Collection}


const prepareInput = (input: string): string[][] => {
  return input.split("\n").map(line => {
    return line.split("")
  })
}


export const day0801 = (input: string): number => {
  const map = prepareInput(input)
  const antennas = findAntennas(map)

  const antinodes = new Set<string>()
  
  let combinations: [Antenna, Antenna][] = []
  for (const key in antennas) {
    const antenna = antennas[key]
    combinations = antenna.antennas.flatMap(
        (v, i) => antenna.antennas.slice(i+1).map( w => [v, w])
    )
    combinations.forEach(comb => {
      const [antinodeX, antinodeY] = [comb[0][0] + (comb[0][0] - comb[1][0]), comb[0][1] + (comb[0][1] - comb[1][1])]
      if(antinodeX >= 0 && antinodeY >= 0 && antinodeX < map.length && antinodeY < map[0].length) {
        antinodes.add(`${antinodeX},${antinodeY}`)
      }
      const [antinodeX2, antinodeY2] = [comb[1][0] + (comb[1][0]- comb[0][0]), comb[1][1] + (comb[1][1] - comb[0][1])]
      if(antinodeX2 >= 0 && antinodeY2 >= 0 && antinodeX2 < map.length && antinodeY2 < map[0].length) {
        antinodes.add(`${antinodeX2},${antinodeY2}`)
      }
    })
  }

  return antinodes.size
}

const findAntennas = (map: string[][]) => {
  const antennas: Antennas = {}
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] !== ".") {
        const key = map[i][j]
        if (antennas[key] === undefined) {
          antennas[key] = { "Type": key, antennas: [] }
        }
        antennas[key].antennas.push([i, j])        
      }
    }
  }
  return antennas
}

export const day0802 = (input: string): number => {
  const map = prepareInput(input)
  const antennas = findAntennas(map)

  const antinodes = new Set<string>()
  
  let combinations: [Antenna, Antenna][] = []
  for (const key in antennas) {
    const antenna = antennas[key]
    combinations = antenna.antennas.flatMap(
        (v, i) => antenna.antennas.slice(i+1).map( w => [v, w])
    )
    combinations.forEach(comb => {
      let inside = true
      let diffY = comb[0][0] - comb[1][0]
      let diffX = comb[0][1] - comb[1][1]
      let currY = comb[0][0]
      let currX = comb[0][1]
      antinodes.add(`${currY},${currX}`)
      while(inside) {
        currY += diffY
        currX += diffX
        if(currX >= 0 && currY >= 0 && currY < map.length && currX < map[0].length) {
          antinodes.add(`${currY},${currX}`)
          map[currY][currX] = "#"
        } else {
          inside = false
        }
      }
      inside = true
      diffY = comb[1][0]- comb[0][0]
      diffX = comb[1][1] - comb[0][1]
      currY = comb[1][0]
      currX = comb[1][1]
      antinodes.add(`${currY},${currX}`)
      while(inside) {
        currY += diffY
        currX += diffX
        if(currX >= 0 && currY >= 0 && currY < map.length && currX < map[0].length) {
          antinodes.add(`${currY},${currX}`)
          map[currY][currX] = "#"
        } else {
          inside = false
        }
      }
    })
  }
  return antinodes.size
}