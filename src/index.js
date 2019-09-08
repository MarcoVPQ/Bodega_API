const express = require('express')
require('./db/db')

const productRouter = require('./routes/productRoutes')
const app = express()


app.use(express.json())
app.use(productRouter)


const PORT = process.env.PORT


app.listen(PORT , () => {
    console.log(`Running on server ${PORT}`)
})


