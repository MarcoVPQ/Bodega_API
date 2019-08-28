const express = require('express')
const app = express()
require('./db/db')

const productRouter = require('./routes/productRoutes')



app.use(express.json())
app.use(productRouter)


const PORT = process.env.PORT


app.listen(PORT , () => {
    console.log(process.env.DATABASE_URI)
    console.log(`Running on server ${PORT}`)
})


