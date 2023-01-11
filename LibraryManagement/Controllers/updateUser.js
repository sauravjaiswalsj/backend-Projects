const { update } = require('../models/BookModel');
const Book = require('../models/BookModel');

const updateUser = async(req,res) =>{
    try{
        const {title,id}= req.body;
        const removedBookFlag = await Book.update({title:title},{
            where:{
                id:id
            }
        });
        console.log(removedBookFlag);
        if(removedBookFlag.length === 0){
            return res.status(500).send('No such book with that author available.');
        }
        res.status(200).send(`Removed the book ${title}.`);
        
    }catch(err){
        console.log(`Error: ${err}`);
    }
};

module.exports = updateUser;
