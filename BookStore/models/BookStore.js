const sequelize = require('../config/db');
const { Model, DataTypes } = require('sequelize');

class BookStore extends Model { };

BookStore.init({
    id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true,
        },
        indexes: [
            {
                unique: true,
                field: ['id']
            }
        ]
    },
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
    price: { type: DataTypes.DECIMAL },

}, { sequelize, createdAt: false, modelName: "BookStore" }
);

module.exports = BookStore;