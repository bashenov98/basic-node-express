let express = require('express');
let bodyParser = require('body-parser');

let app = express();
require('dotenv').config({path:__dirname + '/.env'});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {res.sendFile(__dirname + "/views/index.html");});

app.use((req, res, next) => {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {return res.json({time: req.time});});

app.get('/json', (req, res) =>  {
    let message = 'Hello json'
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.json({"message": message.toUpperCase()})
  }
  return res.status(200).json({"message": message})});

app.get('/:word/echo', (req, res) => {
        return res.json({"echo": req.params.word})});

app.route('/name').get((req, res) => {
    return res.json({"name": req.query.first + " " + req.query.last});
}).post((req, res) => {return res.json({"name": req.body.first + " " + req.body.last})});




































 module.exports = app;
