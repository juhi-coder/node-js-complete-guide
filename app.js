const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const app = express();

const adminRoutes = require("/routes/admin");
const shopRoutes = require("./routes/shop");
const loginRoutes = require("./login");

app.use(bodyParser.urlencoded({ extended: false }));
appuse(cookieParser());

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(loginRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
