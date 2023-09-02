const express = require("express");
const app = express();
const apiRouter = require("./src/routes/api");

app.use(express.json());
app.use("/api", apiRouter);

module.exports = app;
