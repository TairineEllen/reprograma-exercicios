const express = require('express');
const router = express.Router();
const controller = require('../controller/podcastsController');

router.get('/', controller.getAll);
router.get('/podcasts', controller.getAll);

module.exports = router;