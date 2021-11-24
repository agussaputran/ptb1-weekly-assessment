const express = require("express");
const app = express()

// routers
// const offices = require("./router/offices")

app.get("/", (req, res) => {
    res.status(200).send("Welcome to profile api")
});

// app.use("/offices", offices)


app.listen(8000, () => {
    console.log(`server is listening on http://localhost:8000`);
  });