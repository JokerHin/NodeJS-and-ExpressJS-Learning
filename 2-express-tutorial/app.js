// refer the 02 file and using express
const express = require("express");
const path = require("path");

const app = express();

//serves files (e.g., images, CSS, JavaScript) directly from the “public” folder so users can access them through HTTP requests without additional routing.
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
  // It sends the specified “index.html” file as the HTTP response, making sure the file path is resolved correctly based on the server's environment.
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
