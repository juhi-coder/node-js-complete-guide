const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});

app.use((req, res, next) => {
  res.send("<h1>hello from express!</h1>");
  console.log("in the middleware");
});

app.listen(3000);
