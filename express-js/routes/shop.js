import { Router } from 'express';
import { getProducts } from '../controllers/shop.js';

const router = Router();

router.get('/', getProducts);
router.get('/products');
router.get('/cart');
router.get('/checkout');

export default router;
