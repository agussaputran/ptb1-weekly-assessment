require('dotenv/config')
const express = require("express");
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
const { Users } = require('./models/users')
app.use(logger('dev'))

// routers
const provinceRoute = require("./router/province")
const regencyRoute = require("./router/regency")
const districtRoute = require("./router/district")
const subdistrictRoute = require("./router/subdistrict")
const officeRoute = require("./router/offices")


app.get("/", (req, res) => {
    res.status(200).send("Welcome to profile api")
});
app.use(bodyParser.json())
app.use("/province", provinceRoute)
app.use("/regency", regencyRoute)
app.use("/district", districtRoute)
app.use("/subdistrict", subdistrictRoute)
app.use("/offices", officeRoute)

const server = express()

server.use(cookieParser())

server.use(
    cors({
        origin:'http://llocalhost:8000',
        credentials:true
    })
)

server.use(express.json())
server.use(express.urlencoded({extended:true}))




app.listen(8000, () => {
    console.log(`server is listening on http://localhost:8000`);
  });