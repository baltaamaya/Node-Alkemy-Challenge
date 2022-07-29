const { DataTypes } =require("sequelize");
const sequelize = require("../database/database.js");

const User = sequelize.define(
  "user",
  {
    Name: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    Email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "El email tiene que ser un correo valido"
        }
      }
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "La contraseña tiene que tener minimamente 6 caracteres"
        }
      }
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;