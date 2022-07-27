import { Router } from "express";
const auth = require("../middlewares/auth.js")
import {
  getPeliculas,
  getPelicula,
  createPelicula,
  updatePelicula,
  addPersonajeToMovie,
  deletePelicula,
  getPeliculasNombre,
  getPeliculasGenero,
  getPeliculasOrder
} from "../controllers/peliculas.controller.js";

const router = Router();

// Routes
// 7. Listado de peliculas
router.get("/movies", auth, getPeliculas);
// 8. Detalle de Pelicula / Serie con sus personajes
router.get("/movies/:id", auth, getPelicula);
// 9. CRUD de Pelicula
router.post("/movies", auth, createPelicula);
router.put("/movies/:id", auth, updatePelicula);
router.put("/movies/:idMovie/personajes/:idCharacter", auth, addPersonajeToMovie);
router.delete("/movies/:id", auth, deletePelicula);
// 10. Búsqueda de Películas o Series
router.get("/movies?name=nombre", auth, getPeliculasNombre);
router.get("/movies?genre=idGenero", auth, getPeliculasGenero);
router.get("/movies?order=ASC | DESC", auth, getPeliculasOrder);

export default router;
