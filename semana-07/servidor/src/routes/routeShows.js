const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerShows');

router.get('/', controller.getAll);
router.get('/:ano', controller.getByYear);

module.exports = router;