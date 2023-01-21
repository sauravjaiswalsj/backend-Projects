const {Sequelize} = require('sequelize');

//Get env vars
const user = process.env.user;
const password = process.env.password;

//create the instance of db
const createDb = new Sequelize('bookStoreDb', user, password,{
    //dialect is type of db we are connecting to
    dialect : 'sqlite',
    //host is the path of db where the data should reside.
    host: './config/db.sqlite'
});

//const sequelize = createDb;

createDb.authenticate()
.then(()=>{
    console.log(`Authenticated to the DB successfully`);
}).catch(err=>console.log(`Error connecting to db ${err}`));

module.exports = createDb;
