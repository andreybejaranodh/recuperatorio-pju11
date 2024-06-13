// se creo el archivo del modelo

const Sequelize = require('sequelize');
const sequelize = require('../database');

const ProductCategory = sequelize.define('product_categories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = ProductCategory;