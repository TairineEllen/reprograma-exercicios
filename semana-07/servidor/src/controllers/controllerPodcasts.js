  
const podcasts = require('../models/podcasts.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(podcasts);
};

module.exports = { getAll };