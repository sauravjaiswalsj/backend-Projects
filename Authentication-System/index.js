const express = require('express');
const routes = require('./routes/authRoutes');
const app = express();

const PORT = 3300;

//Middleware
// This parses the incoming request to json format and hence, localhost is taking infite time to respond.
// accept json from incoming request
app.use(express.json());
// accept body
app.use(express.urlencoded({ extended: true }));
//use the html
app.use(express.static('public'));

//Name the route
app.use("/api/v1/",routes);

app.listen(PORT, () =>{
    console.log(`Server listenning on Port: ${PORT}`);
}); 