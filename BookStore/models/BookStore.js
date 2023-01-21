const sequelize = require('../config/db');
const { Model, DataTypes } = require('sequelize');

class BookStore extends Model { };

BookStore.init({
    name: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
    dateOfRelease: { type: DataTypes.STRING, },
    bookImage: { type: DataTypes.STRING },
    rating: { type: DataTypes.NUMBER },
    price: { type: DataTypes.NUMBER },
}, { sequelize, modelName: "BookStore" }
);

module.exports = BookStore;