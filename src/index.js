const express = require("express");
const app = express();
const sequelize = require("./database/database.js");
//const bodyParser = require('body-parser')
require('./models/Associations.js');
require('dotenv').config();
personajesRoutes = require("./routes/personajes.routes.js");
peliculasRoutes = require("./routes/peliculas.routes.js");
authRoutes = require("./routes/auth.js");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", personajesRoutes);
app.use("/", peliculasRoutes);
app.use("/",authRoutes);

async function main() {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    app.listen(process.env.PORT || 3000);
    console.log(`Server on port ${process.env.PORT}`);
  } catch (error) {
    console.error(error)
  }
  
}

main();
