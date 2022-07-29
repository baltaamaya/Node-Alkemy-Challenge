const { DataTypes } =require("sequelize");
const sequelize = require("../database/database.js");

const Personaje = sequelize.define(
  "personaje",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Imagen: {
      type: DataTypes.STRING
    },
    Nombre: {
      type: DataTypes.STRING,
    },
    Edad: {
      type: DataTypes.INTEGER,
    },
    Peso: {
      type: DataTypes.FLOAT,
    },
    Historia: {
      type: DataTypes.STRING,
    },    
  },
  {
    timestamps: false,
  }
);

module.exports = Personaje;