const person = {
	name: 'John',
	age: 25,
	greet() {
		console.log('Hi, I am ' + this.name);
	},
};
// console.log(person);
person.greet();
