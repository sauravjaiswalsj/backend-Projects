const Book = require('../models/BookModel');

/*
    @Params: req, res
    @returns: returns the removed book status
    @Method: removes the Book from the db..
*/
const remove = async(req,res) =>{
    try{
        const {title,author}= req.body;
        const removedBookFlag = await Book.destroy({
            where:{
                title:title,
                author:author
            }
        });
        if(removedBookFlag === 0){
            return res.status(500).send('No such book with that author available.');
        }
        res.status(200).send(`Removed the book ${title}.`);
        
    }catch(err){
        console.log(`Error: ${err}`);
    }
};

module.exports = remove;
