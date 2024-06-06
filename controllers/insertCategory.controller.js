import Category from "../models/Category.model.js";

export const createCategory = async (req, res) => {
    try {
        const newCategory = new Category({ name: req.body.name });
        const category = await newCategory.save();
        res.status(201).json({success:true, category});
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
        throw new err;
    }
};