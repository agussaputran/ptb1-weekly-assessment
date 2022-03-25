const express = require('express')
const router = express.Router()
const { isAuth } = require('../middleware/isAuth')

router.post('/protected', async(req,res) =>{
    try{
        const userId = isAuth(req)
        if(userId !== null){
            res.send ({
                data: 'This is protected data.'
            })
        }
    }catch (err) {
        error: `${err.message}`
    }
})
module.exports = router