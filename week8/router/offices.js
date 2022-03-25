// create GET Offices API by province base on users location
const express = require('express')
const router = express.Router()
const officeServices = require('../services/officeServices')


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// dapat semua data
router.get('/', async(req, res) => {
    // this is your logic router
    return officeServices.getAll(req,res)
})
// create GET Offices API by province base on users location
router.get('/userlocation/:id', (req,res)=>{
    return officeServices.getByUserLocation(req,res)
})
// dapat data berdasarkan id yang mau dilihat
router.get('/:id', (req, res) => {
    return officeServices.getById(req,res)
})

// dapat data berdasarkan pencarian nama
router.post('/search',(req,res)=>{
    return officeServices.getByName(req,res)
})

// menambahkan data province ke database
router.post('/:id',(req,res)=>{
    return officeServices.create(req,res)
})

// update data berdasarkan id
router.put('/:id', (req,res)=>{
    return officeServices.update(req,res)
})

// delete data berdasarkan id
router.delete('/:id', (req,res) =>{
    return officeServices.delete(req,res)
})
module.exports = router