const express = require("express");
const path = require("path");
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
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
