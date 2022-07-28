var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).json({title: 'API para explorar el mundo de Disney, sus películas y personajes'});
});

module.exports = router;