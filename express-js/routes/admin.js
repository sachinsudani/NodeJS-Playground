import { Router } from 'express';
import path from 'path';

const __dirname = path.resolve();
const router = Router();

const products = [];

router.get('/add-product', (req, res, next) => {
	res.sendFile(
		path.join(
			__dirname,
			'..',
			'NodeJs-Playground',
			'express-js',
			'views',
			'add-product.html'
		)
	);
});

router.post('/add-product', (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect('/');
});

export default router;
export { products };
