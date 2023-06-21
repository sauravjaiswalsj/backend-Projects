const express = require('express');
const app = express();
const router = require('./Routes/routes');

const PORT = 8080;


app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server listenning on Port: ${PORT}`);
}); 
