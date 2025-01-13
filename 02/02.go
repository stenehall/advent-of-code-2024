package main

import (
	"log"
	"math"
	"os"
	"strconv"
	"strings"
)

func main() {
	numbers := prepareInput("input/input02.txt")
	isSafe := 0
	for _, line := range numbers {
		if checkIfSafe(line) {
			isSafe++
		}
	}
	log.Printf("Number of safe lines: %d\n", isSafe)

	isSafe = 0
	for _, line := range numbers {
		for i := 0; i < len(line); i++ {
			tweaked := append([]int{}, line[:i]...)
			tweaked = append(tweaked, line[i+1:]...)
			if checkIfSafe(tweaked) {
				isSafe++
				break
			}
		}
	}
	log.Printf("Number of safe lines: %d\n", isSafe)
}

func prepareInput(filePath string) [][]int {
	bytesRead, _ := os.ReadFile(filePath)
	lines := strings.Split(string(bytesRead), "\n")
	numbers := make([][]int, 0, len(lines))
	for _, line := range lines {
		lineNumbersArray := make([]int, 0)
		for _, number := range strings.Split(line, " ") {
			if num, err := strconv.Atoi(number); err == nil {
				lineNumbersArray = append(lineNumbersArray, num)
			}
		}
		numbers = append(numbers, lineNumbersArray)
	}
	return numbers
}

func checkIfSafe(numbers []int) bool {
	isAscending := numbers[0] < numbers[1]
	for i := 0; i < len(numbers)-1; i++ {
		isStillAscending := numbers[i] < numbers[i+1]
		pairDifference := math.Abs(float64(numbers[i] - numbers[i+1]))
		if isAscending != isStillAscending || pairDifference == 0 || pairDifference > 3 {
			return false
		}
	}
	return true
}
