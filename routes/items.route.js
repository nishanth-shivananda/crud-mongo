import { createItem } from "../controllers/insertItems.controller.js";
import { updateItem } from "../controllers/updateItems.controllers.js";
import { getItems } from "../controllers/getItems.controller.js";
import { deleteItem } from "../controllers/deletedItem.controller.js";
import express from 'express';

const router = new express.Router();

//Insert Item(CREATE)
router.post('/create-item',createItem);

//Delete Item(REMOVE)
router.delete('/remove-item/:id',deleteItem);

//Update Item(UPDATE)
router.put('/update-item/:id',updateItem);

//Get Item(DISPLAY)
router.get('/get-items',getItems);

export default router;