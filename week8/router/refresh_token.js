const express = require('express')
const router = express.Router()
const Users = require('../models').Users;
const { verify } = require('jsonwebtoken');
const { 
    createAccessToken, 
    sendRefreshToken } = require('../token.js');

router.post('/refresh_token', (req,res)=>{
    const token = req.cookies.refreshtoken
    // if we don't have a token in our request
    if(!token) return res.send({ accesstoken:""})
    // we have a token, let's verify it!
    let payload = null
    try {
        payload = verify(token, process.env.REFRESH_TOKEN_SECRET)
    }catch (err) {
        return res.send({ accesstoken: ''})
    }
    // token is valid, check if user exist
    const user = Users.find(user => user.id === payload.userId)
    if(!user) return res.send({ accesstoken: ''})
    // user exist, check if refreshtoken exist on user
    if(user.refreshtoken !== token){
        return res.send ({ accesstoken:""})
    }
    // token exist, create new refresh and accesstoken
    const accesstoken = createAccessToken(user.id)
    const refreshtoken = refreshtoken
    // all good to go, send new refreshtoken and accesstoken
    sendRefreshToken(res,refreshtoken)
    return res.send({accesstoken})
})

module.exports = router