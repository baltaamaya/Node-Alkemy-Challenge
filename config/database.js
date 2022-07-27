require('dotenv').config()

module.exports = {

  // Configuracion de DB
  username: process.env.DB_USERNAME ||"bamaya",
  password: process.env.DB_PASSWORD ||"dBMYsql159<>",
  database: process.env.DB_DATABASE ||"disneydb",
  host: process.env.DB_HOST ||"localhost",
  dialect: process.env.DB_DIALECT || "mysql",

//   // Configurar Seeds
//   seederStorage: "sequelize",
//   seederStorageTableName: "seeds",

//   // Configuracion de Migrations
//   migrationStorage: "sequelize",
//   migrationStorageTableName: "migrations"

}