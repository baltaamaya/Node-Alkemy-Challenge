const { DataTypes } =require("sequelize");
const sequelize = require("../database/database.js");

const Genero = sequelize.define("genero",
  {
    idGenero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
    },
    Imagen: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Genero;
