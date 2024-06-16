const db = require('../../database/models');

const controller = {
    index: async (req, res) => {
        // Controlador para retornar todos los roles
        try {
            const roles = await db.Role.findAll();
            res.status(200).json(roles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }   
    },
    create: async (req, res) => {
        // Controllador para crear un nuevo usuario
    }
}

module.exports = controller;