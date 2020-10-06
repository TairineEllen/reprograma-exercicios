const express = require('express');
const route = express.Router();
const controller = require('../controllers/livrosController');

route.post('/', controller.postBook);
route.delete('/:id', controller.deleteBook);

module.exports = route;
