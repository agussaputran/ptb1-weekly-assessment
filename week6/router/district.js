const express = require('express')
const router = express.Router()
const districtServices = require('../services/districtServices')


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// dapat semua data
router.get('/', async(req, res) => {
    // this is your logic router
    return districtServices.getAll(req,res)
})

// dapat data berdasarkan id yang mau dilihat
router.get('/:id', (req, res) => {
    return districtServices.getById(req,res)
})

// dapat data berdasarkan pencarian nama
router.post('/search',(req,res)=>{
    return districtServices.getByName(req,res)
})

// menambahkan data province ke database
router.post('/:id',(req,res)=>{
    return districtServices.create(req,res)
})

// update data berdasarkan id
router.put('/:id', (req,res)=>{
    return districtServices.update(req,res)
})

// delete data berdasarkan id
router.delete('/:id', (req,res) =>{
    return districtServices.delete(req,res)
})
module.exports = router