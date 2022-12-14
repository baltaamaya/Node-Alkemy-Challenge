const { DataTypes } =require("sequelize");
const sequelize = require("../database/database.js");

const Genero = sequelize.define("genero",
  {
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Imagen: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
  }
);

  // genre.data = [
  //   { name: "Comedy", image: "/images/genres/comedy.png" },
  //   { name: "Fantasy", image: "/images/genres/fantasy.png" },
  //   { name: "Crime", image: "/images/genres/crime.png" },
  //   { name: "Drama", image: "/images/genres/drama.png" },
  //   { name: "Music", image: "/images/genres/music.png" },
  //   { name: "Adventure", image: "/images/genres/sdventure.png" },
  //   { name: "History", image: "/images/genres/history.png" },
  //   { name: "Thriller", image: "/images/genres/thriller.png" },
  //   { name: "Animation", image: "/images/genres/animation.png" },
  //   { name: "Family", image: "/images/genres/family.png" },
  //   { name: "Mystery", image: "/images/genres/mystery.png" },
  //   { name: "Biography", image: "/images/genres/biography.png" },
  //   { name: "Action", image: "/images/genres/action.png" },
  //   { name: "Film-Noir", image: "/images/genres/film-noir.png" },
  //   { name: "Romance", image: "/images/genres/romance.png" },
  //   { name: "Sci-Fi", image: "/images/genres/sci-fi.png" },
  //   { name: "War", image: "/images/genres/war.png" },
  //   { name: "Western", image: "/images/genres/western.png" },
  //   { name: "Horror", image: "/images/genres/horror.png" },
  //   { name: "Musical", image: "/images/genres/musical.png" },
  //   { name: "Sport", image: "/images/genres/sport.png" },
  // ];

module.exports = Genero;
