const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.js");

const auth = async (req, res, next) => {
    //Comprobar si existe token
    if (!req.headers.authorization) {
        res.status(401).json({msg: "Acceso no autorizado"})
    } else {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                res.status(500).json({msg: "Ha ocurrido un problema al decodificar el token", err});
            } else {
                res.user = decoded;
                next();
            }
        })
    }
}

module.exports = {
    auth
}