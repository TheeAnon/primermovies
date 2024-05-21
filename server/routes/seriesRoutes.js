const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

router.post('/series', seriesController.createSeries);
router.get('/series', seriesController.getSeries);


module.exports = router;
