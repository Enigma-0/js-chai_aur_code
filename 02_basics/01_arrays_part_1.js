let my_array = [
	1, 
	"string",
	null,
	[
		"sub array",
		2,
	]
]

console.table([
	my_array,
])

my_array.push(
	[
		55,
	]
)

console.table([
	my_array,
])

let marvel_heros = ["thor", "ironman", "spiderman"]
let dc_heros = ["superman", "batman", "flash"]

console.table([
	marvel_heros.concat(dc_heros),
])

marvel_heros.push(dc_heros)

console.table([
	marvel_heros
])

marvel_heros = ["thor", "ironman", "spiderman"]
dc_heros = ["superman", "batman", "flash"]

console.table([
	[...marvel_heros, ...dc_heros]
])

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.table([
	another_array,
	real_another_array,
])




