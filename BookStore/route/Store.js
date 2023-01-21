//require the dependencies
const express = require('express');
const createDb = require('../config/db');

//GetControllers
const getBook = require('../Controllers/GetBook');
const addBook = require('../Controllers/AddBook');

//Define router
const router = express.Router();

//createSync in db

createDb.sync().then(()=>console.log(`Db is running`));

//router paths

router.get('/books',getBook);
router.get('/books/:id',);
router.post('/books/add',addBook);
router.put('/books/:id',);
router.delete('/books/:id');

module.exports = router;