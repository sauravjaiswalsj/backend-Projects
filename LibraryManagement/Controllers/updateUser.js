const { update } = require('../models/BookModel');
const Book = require('../models/BookModel');

/*
    @Params: req, res
    @returns: returns the update status
    @Method: Updates the Book title.
*/
const updateUser = async(req,res) =>{
    try{
        const {title,id}= req.body;
        const updateBookFlag = await Book.update({title:title},{
            where:{
                id:id
            }
        });
        if(updateBookFlag.length === 0){
            return res.status(500).send('No such book with that author available.');
        }
        res.status(200).send(`Removed the book ${title}.`);
        
    }catch(err){
        console.log(`Error: ${err}`);
    }
};

module.exports = updateUser;
