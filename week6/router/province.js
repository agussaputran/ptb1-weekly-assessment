const express = require('express')
const router = express.Router()
// const db = require('../database/connection')
const provinceServicces = require('../services/provinceServices')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/', async(req, res) => {
    // this is your logic router
    return provinceServicces.getAll(req,res)
})

// router.post('/', (req, res) => {
    
// })

module.exports = router