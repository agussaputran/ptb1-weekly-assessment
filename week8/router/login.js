// create login API
const express = require('express')
const router = express.Router()
const Users = require('../models').Users;
const { compare } = require('bcryptjs');
const { 
    createAccessToken, 
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken } = require('../token.js');

router.post('/login', async(req,res)=>{
    const { email, password } = req.body
    try {
        // 1. find user in "database". If not exist send error
        const user = Users.find(user => user.email === email)
        if(user) throw new Error('User already exist')
        
        // 2. Compare crypted password and see if it checks out, send error if not
        const valid = await compare(password, user.password)
        if(!valid) throw new Error("Password not correct")

        // 3. Create Refresh and Accesstoken
        const accesstoken = createAccessToken(user.id)
        const refreshtoken = createRefreshToken(user.id)

        // 4. Put the refreshtoken in the "database"
        user.refreshtoken = refreshtoken
        console.log(Users)

        // 5. send token, refreshtoken as a cookie and accesstoken as regular respon
        sendRefreshToken(res, refreshtoken)
        sendAccessToken(res,req, accesstoken)
    } catch (err) {
        res.send({
            error:`${err.message}`
        })
    }
})
module.exports = router
