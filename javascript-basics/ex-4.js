const hobbies = [
	'coding',
	'music',
	'sports',
	'movies',
	'traveling',
	1,
	true,
	{ name: 'John' },
];

// for (let hobby of hobbies) {
// 	console.log(hobby);
// }

// hobbies.push('reading');

// console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));

// console.log(hobbies);

// console.log(hobbies.filter((hobby) => hobby === 'music'));

// slice() - copy array
// const copiedArray = hobbies.slice();

const copiedArray = [...hobbies];

// console.log(copiedArray);

const toArray = (...args) => {
	return args;
};

console.log(toArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
