const express = require('express');
const router = require('');
const app = express();

const PORT = process.env.PORT || 8000;

require('dotenv').config();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/',router);

app.listen(PORT,()=>{
    console.log(`Server is listenning on ${PORT}`);
});