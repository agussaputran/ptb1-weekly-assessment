const express = require('express')
const router = express.Router()
const provinceServices = require('../services/provinceServices')


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// dapat semua data
router.get('/', async(req, res) => {
    // this is your logic router
    return provinceServices.getAll(req,res)
})

// dapat data berdasarkan id yang mau dilihat
router.get('/:id', (req, res) => {
    return provinceServices.getById(req,res)
})

// dapat data berdasarkan pencarian nama
router.post('/search',(req,res)=>{
    return provinceServices.getByName(req,res)
})

// menambahkan data province ke database
router.post('/:id',(req,res)=>{
    return provinceServices.create(req,res)
})

// update data berdasarkan id
router.put('/:id', (req,res)=>{
    return provinceServices.update(req,res)
})

// delete data berdasarkan id
router.delete('/:id', (req,res) =>{
    return provinceServices.delete(req,res)
})
module.exports = router