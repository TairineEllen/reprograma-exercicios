const express = require('express');
const app = express();

const index = require('./route/index');
const podcasts = require('./route/podcastsRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada');
    next();
});

app.use('/', index);
app.use('/podcasts', podcasts);

module.exports = app;