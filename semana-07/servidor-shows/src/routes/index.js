const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Os 10 melhores shows que eu fui");
});

module.exports = router;