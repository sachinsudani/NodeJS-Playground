import { Router } from 'express';
import { getAddProduct, postAddProduct } from '../controllers/products.js';

const router = Router();

router.get('/add-product', getAddProduct);

router.post('/add-product', postAddProduct);

export default router;
