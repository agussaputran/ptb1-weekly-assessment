const express = require('express')
const router = express.Router()
// const db = require('../database/connection')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/', async(req, res) => {
    // this is your logic router
})

router.post('/', (req, res) => {
    
})

module.exports = router