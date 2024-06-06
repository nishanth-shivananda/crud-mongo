import Item from "../models/Items.model.js";

export const createItem = async (req, res) => {
    try {
        const newItem = new Item({
            name: req.body.name,
            category: req.body.category
        });
        const item = await newItem.save();
        res.json(item);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};