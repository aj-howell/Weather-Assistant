var express = require('express');
var router = express.Router();
var chatController = require('../controllers/chatController.js');

router.post('/' , chatController.sendMessage);

module.exports = router;