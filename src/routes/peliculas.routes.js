const { Router } = require("express");
const { auth } = require("../middlewares/auth.js");
const {
  getPeliculas,
  getPelicula,
  createPelicula,
  updatePelicula,
  addPersonajeToMovie,
  deletePelicula,
  getPeliculasNombre,
  getPeliculasGenero,
  getPeliculasOrder
} = require("../controllers/peliculas.controller.js");

const router = Router();

// Routes
// 7. Listado de peliculas
// 10. Búsqueda de Películas o Series
router.get("/movies", auth, getPeliculas);
// 8. Detalle de Pelicula / Serie con sus personajes
router.get("/movies/:id", auth, getPelicula);
// 9. CRUD de Pelicula
router.post("/movies", auth, createPelicula);
router.put("/movies/:id", auth, updatePelicula);
router.put("/movies/:idMovie/characters/:idCharacter", auth, addPersonajeToMovie);
router.delete("/movies/:id", auth, deletePelicula);

module.exports = router ;

