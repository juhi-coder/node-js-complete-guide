const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form action="/login" method="POST"><input type="text" name="username"><button type="submit">Login</button></form>'
  );
});

router.post("/login", (req, res, next) => {
  const username = req.body.username;
  res.setHeader("Set-cookie", `username=${username}`); // Use res.cookie to set the username in cookies
  res.redirect("/");
});

module.exports = router;
