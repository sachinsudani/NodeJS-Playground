import { Router } from 'express';
import { getAddProduct, postAddProduct } from '../controllers/shop.js';

const router = Router();

router.get('/add-product', getAddProduct);

router.get('/products');

router.post('/add-product', postAddProduct);

export default router;
