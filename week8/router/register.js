// create register API
const express = require('express')
const router = express.Router()
const Users = require('../models').Users;
const { hash } = require('bcryptjs');


router.post('/register', async(req,res)=>{
    const { email, password } = req.body
    try {
        // 1. Check if user exist
        const user = Users.find(user => user.email === email)
        if(user) throw new Error('User already exist')
        // 2. If not users exist, hash the password
        const hashedPassword = await hash(password, 10)
        // 3. Insert the user in "database"
        Users.create({
            sub_districts_id,
            first_name,
            last_name,
            email,
            password:hashedPassword,
        })
        res.send({message:'User Created'})
        console.log(Users)
    } catch (err) {
        res.send({
            error:`${err.message}`
        })
    }
})

module.exports = router
