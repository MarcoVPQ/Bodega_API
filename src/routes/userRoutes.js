const express = require('express')
const router = new express.Router()

const User = require('../models/userModel')

router.post('/users', async (req, res) => {

    //console.log(req.body)
    const user = new User(req.body)

    try{
        await user.save()
        res.status(200).send({ user })

    } catch(error){
        res.status(400).send(error)
    }

})


router.post('/users/login', async (req, res) => {

    try{
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        res.send({ user })

    } catch(err){
        res.status(400).send(err)
    }
})

module.exports = router