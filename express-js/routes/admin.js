import { Router } from 'express';
import path from 'path';

const __dirname = path.resolve();
const router = Router();

const products = [];

router.get('/add-product', (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
	});
});

router.post('/add-product', (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect('/');
});

export default router;
export { products };
