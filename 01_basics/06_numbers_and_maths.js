
const min = 7
const max = 15

let mathRandomNumber = Math.random()

console.table([
	mathRandomNumber,
	Math.floor(mathRandomNumber * (max - min + 1)),
	Math.floor(mathRandomNumber * (max - min + 1) + min),
])