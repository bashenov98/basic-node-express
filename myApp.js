let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

var response = "Hello World";

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {res.sendFile(__dirname + "/views/index.html");});

app.get('/json', (req, res) => 
    {(process.env.VAR_NAME === "uppercase") ? res.json({"message": response.toUpperCase}) :res.json({"message": response})});


































 module.exports = app;
