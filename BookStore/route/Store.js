//require the dependencies
const express = require('express');
const createDb = require('../config/db');

//GetControllers

//Define router
const router = express.Router();

//createSync in db

createDb.sync().then(()=>console.log(`Db is running`));

//router paths

router.get('/books',);
router.get('/books/:id',);
router.post('/books/add',);
router.put('/books/:id',);
router.delete('/books/:id');

module.exports = router;