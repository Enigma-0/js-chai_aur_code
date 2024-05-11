console.table([
	"2" > 1,
	"02" > 1,
	"0" > 1,
	null > 0,
	null == 0,
	null < 0,
	null >= 0,
	undefined > 0,
	undefined == 0,
	undefined < 0,
	"2" == 2,
	"2" === 2,
])

let id = Symbol('123')
let anotherId = Symbol('123')

console.table([
	id,
	anotherId,
	id == anotherId,
	id === anotherId,
])