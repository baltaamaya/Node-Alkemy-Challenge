const { Router } = require("express");
const { login, register } = require("../controllers/auth.controller.js");
require("../middlewares/auth.js");

const router = Router();

// Routes
// 2. Autenticación de Usuarios
router.post('/auth/login', login);
router.post('/auth/register', register);

module.exports = router ;