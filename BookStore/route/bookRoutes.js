//require the dependencies
const express = require('express');
const createDb = require('../config/db');

//Define router
const router = express.Router();

//GetControllers
const getBook = require('../Controllers/GetBook');
const addBook = require('../Controllers/AddBook');
const getBookById = require('../Controllers/GetBookById');
const updateBookById = require('../Controllers/UpdateBookById');
const deleteBookById = require('../Controllers/DeleteBookById');

//createSync in db

createDb.sync().then(() => console.log(`Db is running`));

//router paths

router.get('/', (req, res) => {
    res.status(200).send(`Server is running fine`);
})
router.get('/books', getBook);
router.get('/books/:id', getBookById);
router.post('/books/add', addBook);
router.put('/books/:id', updateBookById);
router.delete('/books/:id', deleteBookById);

module.exports = router;