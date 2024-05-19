// const temp_map = new Map();

// temp_map["js"] = "javascript"
// temp_map["py"] = "python"
// temp_map["go"] = "golang"

// console.log(temp_map)

// for (const key in temp_map) {
// 	console.log(key, temp_map[key])
// }

// ------------------------------------------------------------------------------------

const coding = [
	"js",
	"ruby",
	"java",
	"python",
	"golang"
]

// coding.forEach(x => {
// 	console.log(x)
// })

// coding.forEach((x) => {
// 	console.log(x)
// })

// coding.forEach((x, index, array) => {
// 	console.log(
// 		x,
// 		index,
// 		array
// 	)
// })

const mycoding = [
	{
		languageName: 'js',
		isLanguageGood: 'bad'
	},
	{
		languageName: 'python',
		isLanguageGood: 'good'
	},
	{
		languageName: 'golang',
		isLanguageGood: 'great'
	},
	{
		languageName: 'c#',
		isLanguageGood: 'very good'
	},
	{
		languageName: 'cpp',
		isLanguageGood: 'good'
	}
]

mycoding.forEach(x => {
	console.log(`${x.languageName} is ${x.isLanguageGood} language`)
})


