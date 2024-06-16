const db = require('../../database/models');

const controller = {
    async index(req, res) {
        // Controlador para retornar todos los usuarios
        try {
            const users = await db.User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async create (req, res) {
        // Controllador para crear un nuevo usuario
        try {
            const user = await db.User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = controller;