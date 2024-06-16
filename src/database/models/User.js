/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} dataTypes
 *
 */
//User Model con Sequelize
module.exports = (sequelize, dataTypes) => {
  const alias = 'User';
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
    email: {
      type: dataTypes.STRING(255),
    },
    password: {
      type: dataTypes.STRING(255),
    },
    roles_id: {
      type: dataTypes.INTEGER,
    }
  }
  const config = {
    tableName: 'users',
    timestamps: false,
  }
  const User = sequelize.define(alias, cols, config);

  //Aqui se establece la asociacion con el modelo Role
  User.associate = function(models) {
    User.belongsTo(models.Role, {
      as: 'role',
      foreignKey: 'roles_id',
    });
  }

  return User;
}