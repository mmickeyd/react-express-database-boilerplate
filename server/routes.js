const express = require('express');
const app = express();
// const controller = require('./controllers');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;