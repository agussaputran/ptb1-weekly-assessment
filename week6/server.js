const express = require("express");
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
app.use(logger('dev'))

// routers
const provinceRoute = require("./router/province")
const regencyRoute = require("./router/regency")
const districtRoute = require("./router/district")
const subdistrictRoute = require("./router/subdistrict")

app.get("/", (req, res) => {
    res.status(200).send("Welcome to profile api")
});
app.use(bodyParser.json())
app.use("/province", provinceRoute)
app.use("/regency", regencyRoute)
app.use("/district", districtRoute)
app.use("/subdistrict", subdistrictRoute)

app.listen(8000, () => {
    console.log(`server is listening on http://localhost:8000`);
  });