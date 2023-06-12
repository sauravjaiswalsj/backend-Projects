const BookStore = require('../models/BookStore');

/*
    @Params: req, res
    @returns: returns the book detail from db.
    @Method: Get the Book by id details provided in the req.
*/

const getBook = async (req, res) => {
    try {
        const { id } = req.params;

        const books = await BookStore.findOne({
            where: { id: id },
            attributes: ['id', "name",
                "author",
                "genre", "dateOfRelease", "bookImage", "rating", "price"],
            raw: true
        });

        if (!books) {
            return res.status(404).send('Not Found');
        }

        return res.status(200).send(JSON.stringify(books))

    } catch (err) {
        console.error(`Error:${err}`);
        res.status(400).send(err);
    }
}

module.exports = getBook;