const {sequelize} = require('sequelize');
require('dotenv').config();

const user = process.env.user;

const password = process.env.password;

const createDb = new sequelize('bookDb',user,password,{
    dialect : 'sqlite',
    host: "./config/db.sqlite"
});

module.exports = createDb;