const express = require('express')
const cors = require('cors')
require('./db/db')

const productRouter = require('./routes/productRoutes')
const app = express()

app.use(cors());
app.use(express.json())
app.use(productRouter)


const PORT = process.env.PORT


app.listen(PORT , () => {
    console.log(`Running on server ${PORT}`)
})


