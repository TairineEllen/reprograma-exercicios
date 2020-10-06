const express = require('express');
const app = express();

const books = require('./routes/livrosRoute');

app.use(express.json());

app.use((req, res, next) => {
    console.log('Nova requisicao realizada');
    next();
});

app.use('/books', books);

module.exports = app;