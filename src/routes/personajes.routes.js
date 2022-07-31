const { Router } = require("express");
const {
  getPersonajes,
  createPersonaje,
  updatePersonaje,
  addMovieToPersonaje,
  deletePersonaje,
  getPersonaje,
  findPersonajes
} = require("../controllers/personajes.controller.js");

const { auth } = require("../middlewares/auth.js");
const router = Router();

// Routes
// 3. Listado de personajes
router.get("/characters", auth, getPersonajes);
// 4. CRUD de personajes
router.post("/characters", auth, createPersonaje);
router.put("/characters/:id", auth, updatePersonaje);
router.put("/characters/:idCharacter/movies/:idMovie", auth, addMovieToPersonaje);
router.delete("/characters/:id", auth, deletePersonaje);
// 5. Detalles de personaje
router.get("/characters/:id", auth, getPersonaje);
// 6. Busqueda de personajes
//router.get("/findcharacters", auth, findPersonajes);

module.exports = router ;
