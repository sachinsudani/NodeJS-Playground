const name = 'John';
let age = 25;
const hasHobbies = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
	return (
		'Name is ' +
		userName +
		', age is ' +
		userAge +
		' and the user has hobbies: ' +
		userHasHobby
	);
}

console.log(summarizeUser(name, age, hasHobbies));
