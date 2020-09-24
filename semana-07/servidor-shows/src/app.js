const express = require('express');
const app = express();

const index = require('../src/routes/index');
const shows = require('../src/routes/routeShows');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada');
    next();
});

app.use('/', index);
app.use('/shows', shows);


module.exports = app;