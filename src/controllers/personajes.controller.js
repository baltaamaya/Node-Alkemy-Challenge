const Personaje = require("../models/Personaje.js");
const Pelicula = require("../models/Pelicula.js");

// 3. Listado de personajes
const getPersonajes = async (req, res) => {
  try {
    const personajes = await Personaje.findAll({
      attributes: ["Imagen", "Nombre"],
      order: [["Nombre", "DESC"]],
    });
    res.json(personajes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
// 4. CRUD de personajes
const createPersonaje = async (req, res) => {
  try {
    const { Imagen, Nombre, Edad, Peso, Historia } = req.body;
    const newPersonaje = await Personaje.create({
      Imagen,
      Nombre,
      Edad,
      Peso,
      Historia
    });
    res.json(newPersonaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const updatePersonaje = async (req, res) => {
  try {
    const { id } = req.params;
    const personaje = await Personaje.findOne({
      where: { id },
    });
    personaje.set(req.body);
    await personaje.save();
    return res.json(personaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const addMovieToPersonaje = async (req, res) => {
  try {
    const { idMovie, idCharacter } = req.params;
    const personaje = await Personaje.findOne({
      where: { id: idCharacter },
    });
    const movie = await Pelicula.findOne({
      where: { idMovie },
    });    
    personaje.addPelicula(movie);
    return res.json(personaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const deletePersonaje = async (req, res) => {
  const { id } = req.params;
  try {
    await Personaje.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
// 5. Detalles de personaje
const getPersonaje = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Personaje.findOne({
      where: { id }
    },{
      include: [{
        model: "Pelicula",
        as: "peliculas"
      }]
    });
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
// 6. Busqueda de personajes

const findPersonajes = async(req, res) => {
  const { Nombre } = req.params;
  try {
    const personaje = await Personaje.findAll({
      where: req.query,
      attributes: ["id","Imagen", "Edad", "Peso", "Historia", "Peliculas" ],
    },{
      include: 'Peliculas'
    });
    res.json(personaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
// const getPersonajeNombre = async(req, res) => {
//   const { Nombre } = req.params;
//   try {
//     const personaje = await Personaje.findAll({
//       where: { Nombre },
//       attributes: ["id","Imagen", "Edad", "Peso", "Historia", "Peliculas" ],
//     },{
//       include: 'Peliculas'
//     });
//     res.json(personaje);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }
// const getPersonajeEdad = async(req, res) => {
//   const { Nombre } = req.params;
//   try {
//     const personaje = await Personaje.findOne({
//       where: { Edad },
//       attributes: ["id", "Imagen", "Peso", "Historia", "Peliculas" ],
//     },{
//       include: 'Peliculas'
//     });
//     res.json(personaje);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }
// const getPersonajePelicula = async(req, res) => {
//   const { idMovie } = req.params;
//   try {
//     const personaje = await Personaje.findOne({
//       where: { Edad },
//       attributes: ["id", "Imagen", "Peso", "Historia", "Peliculas" ],
//     },{
//       include: 'Peliculas'
//     });
//     res.json(personaje);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

module.exports = {
  getPersonajes,
  createPersonaje,
  updatePersonaje,
  addMovieToPersonaje,
  deletePersonaje,
  getPersonaje,
  findPersonajes
}