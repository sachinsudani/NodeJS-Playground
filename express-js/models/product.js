import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();
const p = path.join(
	path.dirname(__dirname),
	'NodeJs-Playground',
	'express-js',
	'data',
	'products.json'
);

const getProductsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

export class Product {
	constructor(t) {
		this.title = t;
	}

	save() {
		getProductsFromFile((products) => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		getProductsFromFile(cb);
	}
}
