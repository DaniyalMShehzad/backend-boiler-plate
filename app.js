const express = require("express");
const app = express();
app.get("/", (req, res) => {
  // users/name?name=Alex
  return res.send(`hello`); // How are you Alex
});
app.use((req, res, next) => {
  res.status(404).json({
    Error: "URL not found",
  });
});
module.exports = app;
