const mongoose = require('mongoose')
 

//const DB_URI = process.env.DATABASE_URI

mongoose.connect( process.env.DATABASE_URL , {
    useNewUrlParser: true,
    useCreateIndex: true
})