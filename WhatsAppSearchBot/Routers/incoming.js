const express = require('express');
const router = express.Router();
const BotSearch = require('../Controllers/BotSearch')

router. post('/incoming',BotSearch.googleSearch);

module.exports = router;
