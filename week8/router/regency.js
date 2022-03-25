const express = require('express')
const router = express.Router()
const regencyServices = require('../services/regencyServices')


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// dapat semua data
router.get('/', async(req, res) => {
    // this is your logic router
    return regencyServices.getAll(req,res)
})

// dapat data berdasarkan id yang mau dilihat
router.get('/:id', (req, res) => {
    return regencyServices.getById(req,res)
})

// dapat data berdasarkan pencarian nama
router.post('/search',(req,res)=>{
    return regencyServices.getByName(req,res)
})

// menambahkan data province ke database
router.post('/:id',(req,res)=>{
    return regencyServices.create(req,res)
})

// update data berdasarkan id
router.put('/:id', (req,res)=>{
    return regencyServices.update(req,res)
})

// delete data berdasarkan id
router.delete('/:id', (req,res) =>{
    return regencyServices.delete(req,res)
})
module.exports = router