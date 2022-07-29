const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "disneydb", // db name
  "bamaya", // username
  "dBMYsql159<>", // password
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;