const mongoose = require('mongoose')
const DB_URI = require('../../keys/keys')

//const DB_URI = process.env.DATABASE_URI

mongoose.connect("", {
    useNewUrlParser: true,
    useCreateIndex: true
})