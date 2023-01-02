const { urlencoded } = require('body-parser');
const exp = require('constants');
const express = require('express');

const app = express();

const PORT = 3300;

//Middleware
// This parses the incoming request to json format and hence, localhost is taking infite time to respond.
//app.use(express.json);

app.use(urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(PORT, () =>{
    console.log(`Server listenning on Port: ${PORT}`);
})