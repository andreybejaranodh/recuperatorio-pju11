/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} dataTypes
 *
 */
//Role Model with Sequelize
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

  return User;
}