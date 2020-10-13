const express = require('express');
const route = express.Router();
const controller = require('../controllers/funcionariosController');

route.get('/', controller.getAllEmployees);
route.get('/:id', controller.getAgeEmployeeByID);
route.post('/', controller.postEmployee);
route.delete('/:id', controller.deleteEmployee);
route.put('/:id', controller.updateEmployeeWithPut);
route.patch('/:id', controller.updateEmployeeWithPatch);

module.exports = route;
