const routerPersonas = require('express').Router();
const { verPersonas, crearPersona } = require('../controllers/personas');

routerPersonas.get('/', verPersonas);
routerPersonas.post('/', crearPersona);

module.exports = routerPersonas;

