const Book = require('../models/BookModel');

const addBook = async(req,res)=>{
    try{
        const {title,author} = req.body;

        const isExist = await Book.findAll({
            where:{
                title : title,
                author : author
            }
        });
        console.log(isExist)
        if(isExist.length !== 0){
            return res.status(302).send(`Book : ${title} already exist`);
        }
        try{
            await Book.create({title,author});
            return res.status(200).send(`${title} : ${author} added successfully to the library.`);
        }catch(err){
            console.log(`Unable to add Books: ${err}`);
            res.status(500).send('Unable to add Books');
        }
    }catch(err){
        console.log(`Error:${err}`);
    }
};

module.exports = addBook;