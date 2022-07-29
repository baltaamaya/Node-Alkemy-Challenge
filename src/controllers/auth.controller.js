const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const sgMail = require("@sendgrid/mail");

// 11. Envio de emails
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
msg={
    from: "backendnodejs8@gmail.com",
    subject:"¡Bienvenido a  Disney Alkemy API!",
    text: "Su correo electrónico ha sido registrado. Realice el login con su correo electrónico y contraseña para utilizar el servicio."
}
const sendMail = async (recipient) => {
    try {
        msg.to=recipient
        await sgMail.send(msg)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// 2. Autenticación de Usuarios
const register = async (req, res) => {
    // Encriptamos la contraseña
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    // Crear un usuario
    User.create({
        Name: req.body.name,
        Email: req.body.email,
        Password: password
    }).then(user => {
        // Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, 
            {expiresIn: authConfig.expires
            });   
        res.json({
            user: user,
            token: token
        });       
    }).catch(err => {
        res.status(500).json(err);
    });
    await sendMail(req.body.email);   
}

const login = async (req, res) => {
    let { email, password } = req.body;
    // Buscar usuario
    User.findOne({ raw : true, where: { email: email}})
    .then(user => {
        if (!user) {
            res.status(404).json({ msg: "Usuario con este correo no encontrado" });
        } else {
            if (bcrypt.compareSync(password, user.Password)) {
                // Creamos el token
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    user: user,
                    token: token
                })
            } else {
                // Unauthorized Access
                res.status(401).json({ msg: "Contraseña incorrecta" })
            }
        }
    }).catch(err => {
        res.status(500).json(err);
        console.log(err);
    })
}

module.exports = {
    register,
    login
}