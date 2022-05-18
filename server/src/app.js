const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));

app.get("/", function (req, res) {
  res.json({ message: "testing..." });
});

module.exports = app;
