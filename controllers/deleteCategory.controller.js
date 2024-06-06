import Category from "../models/Category.model.js";

export const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const result = await Category.deleteOne({ _id: categoryId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};