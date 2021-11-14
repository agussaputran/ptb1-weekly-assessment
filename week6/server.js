const express = require("express");
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
app.use(logger('dev'))

// routers
const provinceRoute = require("./router/province")


app.get("/", (req, res) => {
    res.status(200).send("Welcome to profile api")
});
app.use(bodyParser.json())
app.use("/province", provinceRoute)


app.listen(8000, () => {
    console.log(`server is listening on http://localhost:8000`);
  });