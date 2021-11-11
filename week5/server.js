// overall sudah bagus dan berjalan dengan baik
// mungkin bisa ditambahkan keterangan untuk memperjelas hasil responsenya
// bisa dilihat pada contoh gambar di readme
const express = require("express");
const db = require("./db/data")

const app = express()

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello this is my first API"
    })
});

app.get("/profile", (req, res) => {
    res.send(db)
});


app.listen(8000, () => {
    console.log(`server is listening on http://localhost:8000`);
  });