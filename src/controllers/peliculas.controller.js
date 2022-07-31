const Personaje = require("../models/Personaje.js");
const Pelicula = require("../models/Pelicula.js");

// 7. Listado de peliculas
// 10. Búsqueda de Películas o Series
const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.findAll({
      where: req.query,
      atributes: ["Imagen", "Titulo","Fecha_Creacion"],
    });
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// 8. Detalle de Pelicula / Serie con sus personajes
const getPelicula = async (req, res) => {
  const { id } = req.params;
  try {
    const pelicula = await Pelicula.findOne({
      where: { id },
      attributes: ["Imagen", "Titulo","Fecha_Creacion", "Calificacion"],
    },{
      include: 'personajes'
    });
    res.json(pelicula);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// 9. CRUD de Pelicula
const createPelicula = async (req, res) => {
  try {
    const {Imagen, Titulo, Fecha_Creacion, Calificacion, Genero} = req.body;
    const newPelicula = await Pelicula.create({
      Imagen,
      Titulo,
      Fecha_Creacion,
      Calificacion,
      Genero
    });
    res.json(newPelicula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const updatePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula.findOne({
      where: { id },
    });
    pelicula.set(req.body);
    await pelicula.save();
    return res.json(pelicula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const addPersonajeToMovie = async (req, res) => {
  try {
    const { idMovie, idCharacter } = req.params;
    const personaje = await Personaje.findOne({
      where: { id: idCharacter },
    });
    const movie = await Pelicula.findOne({
      where: { id: idMovie },
    });    
    movie.addPersonaje(personaje);
    return res.json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const deletePelicula = async (req, res) => {
  const { id } = req.params;
  try {
    await Pelicula.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getPeliculas,
  getPelicula,
  createPelicula,
  updatePelicula,
  addPersonajeToMovie,
  deletePelicula
}