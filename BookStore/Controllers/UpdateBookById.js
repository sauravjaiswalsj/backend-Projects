const BookStore = require('../models/BookStore');

/*
    @Params: req, res
    @returns: returns the status of the book after update it to db
    @Method: Update the Book details provided in the req.
*/

const updateBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, author, genre, dateOfRelease, rating, price } = req.body;

        const updateBook = { name, author, genre, dateOfRelease, rating, price };

        const [rowsAffected] = await BookStore.update(updateBook, {
            where: { id: id },
            raw: true,
        });

        if (rowsAffected === 0) {
            return res.status(404).send('Book not found');
        }

        const book = await BookStore.findByPk(id, {
            attributes: ['id', "name",
                "author",
                "genre", "dateOfRelease", "bookImage", "rating", "price"]
        });

        return res.status(200).send(JSON.stringify(book));
    }
    catch (err) {
        console.error(`Failed: ${err}`);
        return res.status(400).send(`Failed: ${err}`);
    }
};

module.exports = updateBookById;