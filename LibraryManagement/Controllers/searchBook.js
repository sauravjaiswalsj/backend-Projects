const Book = require('../models/BookModel');
const {Op} = require('sequelize');

const searchBook = async(req,res) =>{
    try{
        const val = req.query.value;
        const isBookExist = await Book.findAll({
            where:{
                [Op.or]:[
                    {title:val},
                    {author:val}
                ]
            }
        });
        console.log(isBookExist);
        if(isBookExist.length === 0){
            return res.status(302).send(`Book : ${title} already exist`);
        }else{
            return res.status(200).send(isBookExist);
        }
    }catch(err){
        console.log(`Error: ${err}`);
    }
};

module.exports = searchBook;
