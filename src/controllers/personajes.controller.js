import { Personaje } from "../models/Personaje.js";

// 3. Listado de personajes
export async function getPersonajes(req, res) {
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
export async function createPersonaje(req, res) {
  try {
    const { Imagen, Nombre, Edad, Peso, Historia, Peliculas } = req.body;
    const newPersonaje = await Personaje.create({
      Imagen,
      Nombre,
      Edad,
      Peso,
      Historia,
      Peliculas
    },{
      include: 'Peliculas'
    });
    res.json(newPersonaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updatePersonaje(req, res) {
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

export async function deletePersonaje(req, res) {
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
export async function getPersonaje(req, res) {
  const { id } = req.params;
  try {
    const task = await Personaje.findOne({
      where: { id },
      attributes: ["Imagen", "Nombre", "Edad", "Peso", "Historia", "Peliculas" ],
    },{
      include: 'Peliculas'
    });
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
// 6. Busqueda de personajes
export async function getPersonajeNombre(req, res) {
  const { Nombre } = req.params;
  try {
    const personaje = await Personaje.findAll({
      where: { Nombre },
      attributes: ["id","Imagen", "Edad", "Peso", "Historia", "Peliculas" ],
    },{
      include: 'Peliculas'
    });
    res.json(personaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
export async function getPersonajeEdad(req, res) {
  const { Nombre } = req.params;
  try {
    const personaje = await Personaje.findOne({
      where: { Edad },
      attributes: ["id", "Imagen", "Peso", "Historia", "Peliculas" ],
    },{
      include: 'Peliculas'
    });
    res.json(personaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
export async function getPersonajePelicula(req, res) {
  const { idMovie } = req.params;
  try {
    const personaje = await Personaje.findOne({
      where: { Edad },
      attributes: ["id", "Imagen", "Peso", "Historia", "Peliculas" ],
    },{
      include: 'Peliculas'
    });
    res.json(personaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
