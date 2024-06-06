import Category from '../models/Category.model.js';

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories._id);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};