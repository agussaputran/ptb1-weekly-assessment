require("dotenv").config();
require("./config").connect();
const express = require("express");

const app = express();

app.use(express.json());

modeule.exports = app;