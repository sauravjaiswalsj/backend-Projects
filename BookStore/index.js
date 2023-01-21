//import dependencies
const express = require('express');
const store = require('./route/Store');
require('dotenv').config();

//Define express app
const app = express();

// Define port
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1/',store);

app.listen(PORT, ()=>console.log(`Server is listenning on http://localhost:${PORT}`));