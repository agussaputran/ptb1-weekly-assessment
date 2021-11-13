const express = require("express");
const app = express()
const port = 8000
// routers
const provinceRoute = require("./router/province")


app.get("/", (req, res) => {
    res.status(200).send("Welcome to profile api")
});

app.use("/province", provinceRoute)


app.listen(port, () => {
    console.log(`server is listening on http://localhost:8000`);
  });