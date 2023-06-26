const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("auth", "user", "password", {
    dialect: "sqlite",
    host: "./config/auth.sqlite"
});

module.exports = sequelize;