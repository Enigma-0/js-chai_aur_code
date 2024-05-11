let score = "33"

console.table([
	typeof score,
	typeof(score)
])

score = "33abc"

let valueInNumber = Number(score)

console.table([
	typeof valueInNumber,
	typeof(valueInNumber),
	valueInNumber,
])

score = null

valueInNumber = Number(score)

console.log(valueInNumber)

score = undefined

valueInNumber = Number(score)

console.log(valueInNumber)

// "33" -> 33
// "33abc" -> NaN (type of NaN is number)
// true -> 1 and false -> 0
// null -> 0

let isLoggedIn = 2

console.log(Boolean(isLoggedIn))

// 1 -> true; 0 -> false
// "" -> false
// "abc" -> true
