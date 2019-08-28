const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.catch(e =>  console.log(e))