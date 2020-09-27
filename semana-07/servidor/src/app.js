const express = require('express');
const app = express();

const index = require('./routes/index');
const podcasts = require('./routes/routePodcasts');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada');
    next();
});

app.use('/', index);
app.use('/podcasts', podcasts);

module.exports = app;