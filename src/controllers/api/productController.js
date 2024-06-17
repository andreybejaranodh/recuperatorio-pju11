const db = require('../../database/models');
const { Product, ProductCategory } = db;

const controller = {
    async index(req, res) {
        try {
            const products = await Product.findAll({
                include: [
                    { model: ProductCategory, as: 'category' }
                ]
            });
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async create(req, res) {
        try {
            const { name, price, productCategoryId } = req.body;
            const newProduct = await Product.create({ name, price, productCategoryId });
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = controller;