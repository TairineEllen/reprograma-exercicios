const express = require('express');
const route = express.Router();
const controller = require('../controllers/funcionariosController');

route.post('/', controller.postEmployee);

module.exports = route;
