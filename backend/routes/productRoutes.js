import express from "express";
const router = express.Router();
import {createProduct, getProduct, getProductById, updateProduct} from '../controllers/productController.js';
import {protect, admin} from '../middleware/authMiddleware.js';

router.route('/').get(getProduct).post(protect, admin, createProduct);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct);

export default router;
