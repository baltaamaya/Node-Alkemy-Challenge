const express = require("express");
//import morgan from "morgan";

const app = express();
personajesRoutes = require("./routes/personajes.routes.js");
peliculasRoutes = require("./routes/peliculas.routes.js");
authRoutes = require("./routes/auth.js");

// Middlewares
app.use(express.json());

// Routes
app.use("/", personajesRoutes);
app.use("/", peliculasRoutes);
app.use("/",authRoutes);

//export default app;
