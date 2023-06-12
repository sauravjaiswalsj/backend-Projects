const BookStore = require('../models/BookStore');

const deleteBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const removedBookFlag = await BookStore.destroy({ where: { id: id } });
        console.log(removedBookFlag);
        if (removedBookFlag === 0) {
            return res.status(500).send('No such book with that author available.');
        }
        return res.status(200).send(`Book successfully Deleted`);
    } catch (err) {
        console.error(`Failed: ${err}`);
        return res.status(404).send(`Failed: ${err}`)
    }
}

module.exports = deleteBookById;