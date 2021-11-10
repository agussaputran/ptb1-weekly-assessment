const express = require('express')
const router = express.Router()
const morgan = require('morgan')
router.use(morgan('dev'))
const db = require('../database/connection')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// get all provinces
router.get('/', async (req, res) => {
    // this is your logic router
    const { rows } = await db.query('SELECT * FROM provinces')
    res.send(rows)
})

// get 1 province by Id
router.get('/:id', async (req, res) => {
    // this is your logic router
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM provinces WHERE id = $1', [id])
    // res.send(rows[0])
    res.send(rows)
})

router.post('/', (req, res) => {

})

module.exports = router