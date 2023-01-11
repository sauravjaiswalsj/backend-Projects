const Book = require('../models/BookModel');

const addBook = async(req,res)=>{
    try{
        const {name,author} = req.body;

        const isExist = await Book.findAll({
            where:{
                name : name,
                author : author
            }
        });

        if(isExist){
            res.status(302)
        }

    }catch(err){
        console.log(`Error:${err}`);
    }
};

module.exports = addBook;