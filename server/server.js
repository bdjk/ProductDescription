const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.get("/", function(req, res) {
  res.json({ message: "Beauty Gang Beauty Gang Beauty Gang" });
});

module.exports = app;
