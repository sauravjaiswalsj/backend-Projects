const express = require('express');
const routes = require('./routes/authRoutes');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.port;
const sequelize = require('./config/db');

//Middleware
// This parses the incoming request to json format and hence, localhost is taking infite time to respond.
// accept json from incoming request
app.use(express.json());

app.use(cors());
// accept body
app.use(express.urlencoded({ extended: true }));
//use the html
app.use(express.static('public'));

//Name the route
app.use("/api/v1/", routes);

//Check the connection with the database is correct or not.
try {
    sequelize.authenticate()
        .then(() => {
            console.log(`Authenticated to DB successfully.`);
        })
        .catch(err => {
            console.log(`Error occured during db connection: ${err}`);
        });
} catch (error) {
    console.error('Unable to connect to the database: ', error);
};

app.listen(PORT, () => {
    console.log(`Server listenning on Port: ${PORT}`);
}); 