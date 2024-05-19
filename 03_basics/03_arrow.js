const user = {
	username: "hitesh",
	price: 999,
	welcomeMessage: function() {
		console.log(this)
		console.log(`${this.username}, welcome to the website`);
	}
}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

// function chai() {
// 	let username = "hitesh"
// 	console.log(this)
// }

// chai()

// const chai = function() {
// 	let username = "hitesh"
// 	console.log(this.username)
// }

// chai()

const chai = () => {
	let username = "hitesh"
	console.log(this)
}

// chai() 

const addTwo = (num1, num2) => {
	return num1 + num2
}

const addTwo2 = (num1, num2) => (num1 + num2) // implicit return

const addTwo3 = (num1, num2) => ({username: "hitesh"})
const addTwo4 = (num1, num2) => {username: "hitesh"} // should wrapp in parenthesis

console.log(addTwo3())
console.log(addTwo4())
