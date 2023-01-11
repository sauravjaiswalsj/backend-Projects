const Book = require('../models/BookModel');

const home = async(req,res) =>{
    try{
        const getAllBooks = await Book.findAll({});
        if(getAllBooks.length === 0){
            res.status(200).send('No Books available, Please add your fav books!');
        }
        else{
            res.status(200).send(getAllBooks);
        }
    }catch(err){
        console.log(`Error: ${err}`);
    }
};

module.exports = home;
