import { createCategory } from "../controllers/insertCategory.controller.js";
import { deleteCategory } from "../controllers/deleteCategory.controller.js";
import { updateCategory } from "../controllers/updateCategory.controller.js";
import { getCategories } from "../controllers/getCategory.controller.js";
import express from 'express';

const router = express.Router();

//Insert Category(CREATE)
router.post('/insert-category',createCategory);

//Delete Category(REMOVE)
router.delete('/delete-category/:id',deleteCategory);

//Update Category(UPDATE)
router.put('/update-category/:id',updateCategory);

//Get Category(DISPLAY)
router.get('/get-categories',getCategories);

export default router;