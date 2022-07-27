import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Genero } from "./Genero.js";
import { Personaje }from "./Personaje.js"

export const Pelicula = sequelize.define(
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
      type: DataTypes.DATE
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
Pelicula.belongsToMany(Personaje, {through:"PersonajePelicula", as:"personajes"});

Pelicula.belongsTo(Genero,{
  foreignKey: "idGenero",
  targetKey: "idMovie"  
})