import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pelicula } from "./Pelicula.js";

export const Genero = sequelize.define(
  "genero",
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

// Genero.hasMany(Pelicula,{
//   foreignKey: "idGenero",
//   sourceKey: "idMovie"
// })
