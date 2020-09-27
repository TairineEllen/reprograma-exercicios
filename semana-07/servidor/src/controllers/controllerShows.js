const shows = require('../models/shows.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(shows);
};

const getByYear = (req, res) => {
    console.log(req.params.ano)
    res.send(shows.filter((show) => show.ano == req.params.ano));
}

module.exports = { getAll, getByYear };