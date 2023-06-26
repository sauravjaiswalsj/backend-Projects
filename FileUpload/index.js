
const express = require('express');
const app = express();
const sequelize = require('./Config/db');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`hello`);
});

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
    console.log(`App listening on port http://localhost:${PORT}/`);
})