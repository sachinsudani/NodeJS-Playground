import { Router } from 'express';
import path from 'path';
import { products } from './admin.js';

const __dirname = path.resolve();
const router = Router();

router.get('/', (req, res, next) => {
	res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

export default router;
