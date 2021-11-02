const express = require("express");
const db = require("./db/data")

const app = express()

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello this is my first API"
    })
});

app.get("/profile", (req, res) => {
   
});


app.listen(8000, () => {
    console.log(`server is listening on http://localhost:8000`);
  });