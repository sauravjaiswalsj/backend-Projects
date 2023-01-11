const { Sequelize } = require('sequelize');
require('dotenv').config();

const user = process.env.user;

const password = process.env.password;

const createDb = new Sequelize('bookDb',user,password,{
    dialect : 'sqlite',
    host: "./config/db.sqlite"
});

const sequelize = createDb;

sequelize.authenticate()
    .then(()=>{
        console.log(`Authenticated to DB successfully.`);
    })
    .catch(err=>{
        console.log(`Error occured during db connection: ${err}`);
});

module.exports = createDb;