const Personaje = require('../models/Personaje.js');
const Pelicula = require('../models/Pelicula.js');
const Genero = require('../models/Genero.js')

Personaje.belongsToMany(Pelicula, { through: "PersonajePelicula", timestamps: false});
Pelicula.belongsToMany(Personaje, { through: "PersonajePelicula", timestamps: false});
Pelicula.belongsTo(Genero,{targetKey: "Nombre" ,foreignKey: "Genero" , sourceKey: "id", as: "peliculas"});