const sequelize = require('../config/database');
const { Model, DataTypes } = require('sequelize');

class Book extends Model{};

Book.init({
    title:{
        type:DataTypes.STRING,
    },
    author:{
        type:DataTypes.STRING,
    }
}, {sequelize,modelName:"Book"}
);

module.exports = Book;