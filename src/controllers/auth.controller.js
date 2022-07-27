import { User } from "../models/User.js";
// import { User } from "../index.js"
require("dotenv").config();
const sgMail = require("@sendgrid/mail")


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
export async function register(req, res) {

    // Encriptamos la contraseña
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    // Crear un usuario
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: password
    }).then(user =>{
        sendMail(email);
    }).then(user => {
        // Creamos el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
        });
        res.json({
            user: user,
            token: token
        });
    }).catch(err => {
        res.status(500).json(err);
    });
}

export async function login(req, res) {
    let { email, password } = req.body;
        // Buscar usuario
    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (!user) {
            res.status(404).json({ msg: "Usuario con este correo no encontrado" });
        } else {
            if (bcrypt.compareSync(password, user.password)) {
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
    })
}