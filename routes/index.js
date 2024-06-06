import itemRoutes from './items.route.js';
import categoryRoutes from './category.route.js';
import express from 'express';

const router = express.Router();

//Item Router
router.use('/items',itemRoutes);

//Category Router
router.use('/category',categoryRoutes);

export default router;