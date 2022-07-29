const Personaje = require('../models/Personaje.js');
const Pelicula = require('../models/Pelicula.js');
const Genero = require('../models/Genero.js')


// Personaje HAS MANY Pelicula
Personaje.belongsToMany(Pelicula, { through: "PersonajePelicula", as:"peliculas", timestamps: false});
Pelicula.belongsToMany(Personaje, { through: "PersonajePelicula", as:"personajes", timestamps: false});

// Genero.hasMany(Pelicula,{
//     foreignKey: "idGenero",
//     sourceKey: "idMovie"
// })

Pelicula.belongsTo(Genero,{
    foreignKey: "idMovie",
    targetKey: "idGenero"  
})