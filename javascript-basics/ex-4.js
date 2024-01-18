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

console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));

console.log(hobbies);
