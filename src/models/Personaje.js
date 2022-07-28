import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pelicula } from "./Pelicula.js";

export const Personaje = sequelize.define(
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

Personaje.belongsToMany(Pelicula, {through:"PersonajePelicula", as:"peliculas"});