const express = require('express')
const app = express()
require('./db/db')

const productRouter = require('./routes/productRoutes')

app.use(productRouter)
app.use(express.json())

const PORT = process.env.PORT || 5000


app.listen(PORT , () => console.log(`Running on server ${PORT}`))