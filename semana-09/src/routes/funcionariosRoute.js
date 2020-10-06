const express = require('express');
const route = express.Router();
const controller = require('../controllers/funcionariosController');

route.post('/', controller.postEmployee);
route.delete('/:id', controller.deleteEmployee);

module.exports = route;
