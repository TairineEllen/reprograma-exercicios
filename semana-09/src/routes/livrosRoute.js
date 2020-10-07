const express = require('express');
const route = express.Router();
const controller = require('../controllers/livrosController');

route.get('/', controller.getAllBooks);
route.get('/estoque', controller.getAllBooksInStock);
route.get('/editoras', controller.getBooksByPublisher);
route.post('/', controller.postBook);
route.delete('/:id', controller.deleteBook);

module.exports = route;
