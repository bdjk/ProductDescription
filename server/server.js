const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const routes = require('./router.js');
const cors = require("cors");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', routes);

app.use(express.static(path.resolve(__dirname, "../client/dist")));

module.exports = app;