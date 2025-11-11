const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', async (req, res) => {
    console.log(__dirname);
    const homePath = path.join(__dirname, '..', '/public', 'index.html');
    res.status(200).sendFile(homePath);
});

router.post('/urlapi', (req, res) => {
    console.log(req);
});


module.exports = router;
