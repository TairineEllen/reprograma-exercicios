const shows = require('../model/shows.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(shows);
};

const getByYear = (req, res) => {
    console.log(req.query.ano)
    console.log(req)
    res.send(shows.filter((show) => show.ano == req.query.ano));
}

module.exports = { getAll, getByYear };