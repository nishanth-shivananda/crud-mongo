import Category from "../models/Category.model.js";

export const updateCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }
        category.name = req.body.name;
        const updatedCategory = await category.save();
        res.status(201).json({ success: true, updatedCategory});
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};