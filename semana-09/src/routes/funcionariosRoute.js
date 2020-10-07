const express = require('express');
const route = express.Router();
const controller = require('../controllers/funcionariosController');

route.get('/', controller.getAllEmployees);
route.get('/:id', controller.getAgeEmployeeByID);
route.post('/', controller.postEmployee);
route.delete('/:id', controller.deleteEmployee);

module.exports = route;
