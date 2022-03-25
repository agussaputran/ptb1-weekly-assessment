const express = require('express')
const router = express.Router()

router.post('/logout', (req,res) => {
    res.clearCookie('refreshtoken', {path: '/refresh_token'})
    return res.send({
        message: 'Logged out'
    })
})
module.exports = router