import Item from '../models/Items.model.js';

export const getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('category', 'name').sort({ date: -1 });
        res.json(items);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};