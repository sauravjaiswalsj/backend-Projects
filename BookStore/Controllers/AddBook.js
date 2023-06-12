const BookStore = require('../models/BookStore');

/*
    @Params: req, res
    @returns: returns the status of the book after adding it to dir
    @Method: Add the Book details provided in the req.
*/
const addBook = async (req, res) => {
    console.log(`Added Book to db`);
    try {
        const { name, author, genre, dateOfRelease, bookImage, rating, price } = req.body;

        if (!name || !author || !genre || !dateOfRelease || !rating || !price) {
            return res.status(400).send('Missing Params');
        }
        const isBookAvailable = await BookStore.findOne({
            where: {
                name: name,
            }
        });

        if (isBookAvailable) {
            return res.status(302).send('Already present', JSON.stringify(isBookAvailable));
        }
        try {

            const uid = Math.floor(Math.random() * 100) + genre + Date.now();

            const book = { id: uid, name, author, genre, dateOfRelease, bookImage, rating, price };

            await BookStore.create(book);

            return res.status(201).send(JSON.stringify(book))
        }
        catch (err) {
            console.log(`Unable to add Books: ${err}`);
            res.status(500).send('Unable to add Books');
        }
    } catch (err) {
        console.error(`Error: ${err}`);
    }
};

module.exports = addBook;