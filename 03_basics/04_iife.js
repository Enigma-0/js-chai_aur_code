// imediately invoked function expression (IIFE)

(function chai(){
	console.log("db connected")
})(); // ; is needed here to tell js where to end execution

( (name) => {
	console.log(`db2 connected ${name}`)
})('wellness'); // here to
