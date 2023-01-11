const express = require('express');
const createDb = require('../config/database');
const router = express.Router();

//GetControllers
const home = require('../Controllers/home');

createDb.sync().then(()=>{
    console.log(`Db is running`);
});
router.get('/',home);

//router.post('/newBook',newBook);

//router.get('/searchBook',searchBook);

module.exports = router;
