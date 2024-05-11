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

// OPERATIONS

console.log("OPERATIONS")

let value = 3
let negValue = -value

console.table([
	negValue,
	2+2,
	2-2,
	2*3,
	2**3,
	2/3,
	2%3,
])

let str1 = "hello"
let str2 = " alex"

let str3 = str1 + str2

console.log(str3)

console.table([
	"1" + 2,
	1 + "2",
	"1" + 2 + 2,
	1 + 2 + "2"
])

