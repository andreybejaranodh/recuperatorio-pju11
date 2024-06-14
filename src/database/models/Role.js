/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} dataTypes
 *
 */
//Role Model with Sequelize
module.exports = (sequelize, dataTypes) => {
  const alias = 'Role';
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: dataTypes.STRING(255),
    },
  }
  const config = {
    tableName: 'roles',
    timestamps: false,
  }
  const Role = sequelize.define(alias, cols, config);

  return Role;
}