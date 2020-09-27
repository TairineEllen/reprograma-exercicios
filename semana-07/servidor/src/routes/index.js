const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(
        "Alguns podcasts que foram destaque em 2020"
    );
});

module.exports = router;