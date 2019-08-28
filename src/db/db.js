const mongoose = require('mongoose')

const DB_URI = process.env.DATABASE_URI

mongoose.connect(`${DB_URI}`, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.catch(e =>  console.log(e))