import { Router } from 'express';
import path from 'path';

const __dirname = path.resolve();
const router = Router();

router.get('/add-product', (req, res, next) => {
	res.sendFile(
		path.join(
			__dirname,
			'../',
			'NodeJs-Playground',
			'express-js',
			'views',
			'add-product.html'
		)
	);
});

router.post('/add-product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

export default router;
