var express = require('express');
var router = express.Router();
var imageController = require('../controllers/imageController.js');

router.post('/', imageController.generatePictureDescription)

module.exports = router;
