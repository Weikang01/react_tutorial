const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.sendFile(`${__dirname}/history.html`);
});

app.listen(5000, () => {});
