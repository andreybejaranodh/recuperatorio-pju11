/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} dataTypes
 *
 */
//Product Model con Sequelize
module.exports = (sequelize, dataTypes) => {
  const alias = 'Product';
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(255),
    },
    description: {
      type: dataTypes.STRING(255),
    },
    price: {
      type: dataTypes.DECIMAL(11, 2),
    },
    product_categories_id: {
      type: dataTypes.INTEGER,
    }
  }

  const config = {
    tableName: 'products',
    timestamps: false,
  }
  const Product = sequelize.define(alias, cols, config);

  //Aqui se establece la asociacion con el modelo ProductCategory
  Product.associate = (models) => {
    Product.belongsTo(models.ProductCategory, {
      as: 'product_categories',
      foreignKey: 'product_categories_id',
    });
  }

  return Product;
}