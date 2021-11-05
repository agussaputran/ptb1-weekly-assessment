const express = require("express");
const app = express()
const router = require("./router")
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello this is my first API"
    })
});


app.use("/profile", router)



app.listen(8000, () => {
    console.log('\n--------------------------------------------')
    console.log(`server is listening on http://localhost:8000`);
    console.log('--------------------------------------------\n')
});



