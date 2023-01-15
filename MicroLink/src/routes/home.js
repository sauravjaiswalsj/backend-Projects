const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res)=>{
    console.log(__dirname);
    const homePath = path.join(__dirname, '..', '/public', 'index.html');
    res.status(200).sendFile(homePath);
});

router.get('/javascript/script.js', (req, res) => {
    res.set('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, '..', 'public', 'javascript', 'script.js'));
});
  

module.exports = router;
