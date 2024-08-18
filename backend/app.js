const express = require('express')
const connectDB = require('./config/db')
const cardRoutes = require('./routes/CardRoutes')

const app = express()

connectDB()

app.use(express.json())
app.use('/cards', cardRoutes)

module.exports = app