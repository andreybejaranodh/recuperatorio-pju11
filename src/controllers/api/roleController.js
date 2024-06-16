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
        try {
            const { name } = req.body;

            // Se verifica que se haya enviado el campo nombre
            if (!name) {
                // Si no se envió el campo nombre, se retorna un error
                return res.status(400).json({ error: 'Falta el campo nombre' });
            }
            
            const role = await db.Role.create({ name: name });
            res.status(201).json(role);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = controller;