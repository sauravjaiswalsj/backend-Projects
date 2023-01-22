const BookStore = require('../models/BookStore');

/*
    @Params: req, res
    @returns: returns the status of the book after adding it to dir
    @Method: Add the Book details provided in the req.
*/
const addBook = async(req,res)=>{
    try{
        const {name,author,genre,dateOfRelease,bookImage,rating,price} = req.body;
        const book = {name,author,genre,dateOfRelease,bookImage,rating,price};
        const isExist = await BookStore.findAll({
            where:{
                name:name,
                author:author,
                dateOfRelease:dateOfRelease
            }
        });
        if(isExist.length !== 0){
            return res.status(302).send(`Book:${name} already exist.`);
        }
        try{
            const response = await BookStore.create(book);
            return res.status(201).send(`${response} created;`)
        }catch(err){
            console.log(`Unable to add Books: ${err}`);
            res.status(500).send('Unable to add Books');
        }
    }catch(err){
        console.log(`Error: ${err}`);
    }
};

module.exports = addBook;