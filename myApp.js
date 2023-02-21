let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

var response = "Hello World";

if (process.env.MESSAGE_STYLE === 'uppercase') {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {res.sendFile(__dirname + "/views/index.html");});

app.get('/json', (req, res) =>  {res.json({"message": response})});


































 module.exports = app;
