import { Pelicula } from "../models/Pelicula.js";
import { Personaje } from "../models/Personaje.js";

// 7. Listado de peliculas
export async function getPeliculas(req, res) {
  try {
    const peliculas = await Pelicula.findAll({
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
export async function getPelicula(req, res) {
  const { idMovie } = req.params;
  try {
    const pelicula = await Pelicula.findOne({
      where: { idMovie },
      attributes: ["Imagen", "Titulo","Fecha_Creacion", "Calificacion","Personajes"],
    },{
      include: 'Personajes'
    });
    res.json(pelicula);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// 9. CRUD de Pelicula
export async function createPelicula(req, res) {
  try {
    const {Imagen, Titulo, Fecha_Creacion, Calificacion} = req.body;
    const newPelicula = await Pelicula.create({
      Imagen,
      Titulo,
      Fecha_Creacion,
      Calificacion,
    });
    res.json(newPelicula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updatePelicula(req, res) {
  try {
    const { idMovie } = req.params;
    const pelicula = await Pelicula.findOne({
      where: { idMovie },
    });
    pelicula.set(req.body);
    await pelicula.save();
    return res.json(pelicula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function addPersonajeToMovie(req, res) {
  try {
    const { idMovie, idCharacter } = req.params;
    const personaje = await Personaje.findOne({
      where: { idCharacter },
    });
    const movie = await Pelicula.findOne({
      where: { idMovie },
    });    
    movie.addPersonaje(personaje);
    return res.json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deletePelicula(req, res) {
  const { idMovie } = req.params;
  try {
    await Pelicula.destroy({
      where: { idMovie },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// 10. Búsqueda de Películas o Series
export async function getPeliculasNombre(req, res) {
  const { nombre } = req.params;
  try {
    const pelicula = await Pelicula.findAll({
      where: { Titulo: nombre },
      attributes: ["idMovie","Imagen","Fecha_Creacion", "Calificacion", "Personajes","Genero" ],
    },{
      include: ["Personajes", "Genero"]
    });
    res.json(pelicula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
export async function getPeliculasGenero(req, res) {
  const { idGemero } = req.params;
  try {
    const pelicula = await Pelicula.findAll({
      where: { Genero: idGemero },
      attributes: ["idMovie","Imagen","Titulo","Fecha_Creacion", "Calificacion", "Personajes"],
    },{
      include: ["Personajes", "Genero"]
    });
    res.json(pelicula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
export async function getPeliculasOrder(req, res) {
  const { order } = req.params;
  try {
    const pelicula = await Pelicula.findAll({
      where: { order: [["Fecha_Creacion", order]] },
      attributes: ["idMovie","Imagen","Fecha_Creacion", "Calificacion", "Personajes","Genero" ],
    },{
      include: ["Personajes", "Genero"]
    });
    res.json(pelicula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}