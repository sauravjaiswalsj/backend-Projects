const express = require('express');
const createDb = require('../config/database');
const router = express.Router();

//GetControllers
const home = require('../Controllers/home');
const addBook = require('../Controllers/addBook');
const searchBook = require('../Controllers/searchBook');
const remove = require('../Controllers/remove');
const updateUser = require('../Controllers/updateUser');

createDb.sync().then(()=>{
    console.log(`Db is running`);
});
router.get('/',home);

router.post('/add',addBook);

router.post('/search',searchBook);

router.delete('/remove',remove);

router.put('/update', updateUser);

//router.get('/searchBook',searchBook);

module.exports = router;
