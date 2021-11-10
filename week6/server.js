require('dotenv').config()
const express = require("express");
const app = express()
const db = require('./database/connection')
const PORT = process.env.PORT

// routers
const provinceRoute = require("./router/province")


app.get("/", (req, res) => {
    res.status(200).send("Welcome to profile api")
});

app.use("/province", provinceRoute)


app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});