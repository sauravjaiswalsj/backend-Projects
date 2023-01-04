const { Sequelize } = require("sequelize");

//* Instantiates sequelize with the name of database, username, password and configuration options
const createDb = new Sequelize("test-db","user","password",{
    dialect: "sqlite",
    host:"./config/db.sqlite"
});

module.exports = createDb;