const express = require("express");
const db = require("./db/data")
const { findData, updateData, deleteData } = require("./index")

const app = express()

const getAllProfiles = async (req, res, next) => {
    try {
        // mock retrieval of a real DB with async/await
        const profiles = await db;
        res.status(200).send(profiles);
    } catch (err) {
        res.status(400).send(err);
    }
};

const getProfileById = async (req, res, next) => {
    const { id } = req.params;
    try {
        // mock retrieval of a real DB with async/await
        const profiles = await db;
        const record = findData(id);
        if (!record) { res.status(400).send(`Record with id ${id} not found...`)}
        else { res.send(record); }        
    } catch (err) {
        res.status(400).send(err);
    }
};

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello this is my first API"
    })
});

app.get("/profile", getAllProfiles)
app.get("/profile/:id", getProfileById)






app.listen(8000, () => {
    console.log('\n--------------------------------------------')
    console.log(`server is listening on http://localhost:8000`);
    console.log('--------------------------------------------\n')
});



