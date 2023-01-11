const express = require('express');
const createDb = require('../config/database');
const router = express.Router();

//GetControllers
const home = require('../Controllers/home');
const addBook = require('../Controllers/addBook');
const searchBook = require('../Controllers/searchBook');

createDb.sync().then(()=>{
    console.log(`Db is running`);
});
router.get('/',home);

router.post('/add',addBook);

router.post('/search',searchBook);

//router.get('/searchBook',searchBook);

module.exports = router;
