'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init({
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    sinopse: DataTypes.STRING,
    autor: DataTypes.STRING,
    comentario: DataTypes.STRING,
    classificacao: DataTypes.INTEGER,
    opcao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};