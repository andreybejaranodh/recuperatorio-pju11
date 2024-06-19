module.exports = (sequelize, dataTypes) => {
    const alias = 'ProductCategory';
    const cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING(255),
      },
    };
    const config = {
      tableName: 'product_categories',
      timestamps: false, 
    };
    const ProductCategory = sequelize.define(alias, cols, config);
  
    return ProductCategory;
  };