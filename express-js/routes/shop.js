import { Router } from 'express';
import path from 'path';
import { products } from './admin.js';

const __dirname = path.resolve();
const router = Router();

router.get('/', (req, res, next) => {
	console.log(products);
	res.sendFile(
		path.join(
			__dirname,
			'..',
			'NodeJs-Playground',
			'express-js',
			'views',
			'shop.html'
		)
	);
});

export default router;
