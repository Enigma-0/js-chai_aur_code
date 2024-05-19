const tinder_user = new Object(); // singleton object
// const tinder_user = {}; // non singleton object

// above mentioned both declaration are same, except singletonness

tinder_user.id = "1234sfldd";
tinder_user.name = "sammy";
tinder_user.isLoggedId = false;

console.log(tinder_user);

const regularUser = {
	email: "some@gmail.com",
	fullname: {
		firstname: "some",
		lastname: "some",
		username: "some"
	}
}

console.log(regularUser);
console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname?.username);

const obj1 = {
	1: "a",
	2: "b",
}

const obj2 = {
	3: "c",
	4: "d",
}

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);
