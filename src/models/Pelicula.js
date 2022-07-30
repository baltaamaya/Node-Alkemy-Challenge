const { DataTypes } =require("sequelize");
const sequelize = require("../database/database.js");

const Pelicula = sequelize.define(
  "pelicula",
  {
    idMovie: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Imagen: {
      type: DataTypes.STRING  
    },
    Titulo: {
      type:DataTypes.STRING
    },
    Fecha_Creacion: {
      type: DataTypes.DATEONLY
    },
    Calificacion: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 }
    },      
  },
  {
    timestamps: false,
  }
);

module.exports = Pelicula;