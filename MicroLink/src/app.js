const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));



app.listen(PORT,()=>{
    console.log(`Server is listening on Port: http://localhost:${PORT}`);
}); 

