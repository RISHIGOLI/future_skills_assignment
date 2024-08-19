const express = require('express')
const connectDB = require('./config/db')
const cardRoutes = require('./routes/CardRoutes')
const cors = require('cors')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use('/cards', cardRoutes)

module.exports = app