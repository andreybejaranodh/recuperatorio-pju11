const db = require('../../database/models');

const controller = {
    // Controlador para retornar todas las categorias de producto
    async index(req, res) {
        try {
            const categories = await db.ProductCategory.findAll();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las categorías', error: error.message });
        }
    },

    // Controlador para crear una nueva categoria de producto
    async create(req, res) {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'El nombre es requerido' });
        }

        try {
            const newCategory = await db.ProductCategory.create({ name });
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear la categoría', error: error.message });
        }
    }
}

module.exports = controller;