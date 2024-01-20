const person = {
	name: 'John',
	age: 25,
	greet() {
		console.log('Hi, I am ' + this.name);
	},
};

// 1. Object destructuring

const printName = ({ name }) => {
	// console.log(name);
};

const { name, age } = person;

console.log(name, age);

printName(person);
// console.log(person);
// person.greet();

// 4. Spread operator

const copiedPerson = { ...person };
// console.log(copiedPerson);
