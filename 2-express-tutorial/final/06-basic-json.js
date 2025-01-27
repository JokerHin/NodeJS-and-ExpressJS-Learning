// set the json middleware and send json data
const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(5000, (req, res) => {
  console.log("Server is listening on port 5000");
});
