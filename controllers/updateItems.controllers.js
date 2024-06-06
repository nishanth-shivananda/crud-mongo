import Item from "../models/Items.model.js";

export const updateItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'Item not found' });
        }
        item.name = req.body.name;
        item.category = req.body.category;
        const updatedItem = await item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};