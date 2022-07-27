import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
const auth = require("../middlewares/auth.js")

const router = Router();

// Routes
// 2. Autenticación de Usuarios
router.post("/auth/login", login);
router.post("/auth/register", register);


export default router;