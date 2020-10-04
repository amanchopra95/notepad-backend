const express = require('express')
const dotenv = require('dotenv')
const errorHandler = require('./middlewares/errorHandler')
const connectDB = require('./db/db')

dotenv.config()

connectDB()

// Routes
const notes = require('./routes/notes')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/v1/notes', notes)
app.use(errorHandler)

const server = app.listen(PORT, () => {
    console.log(`Server has started at http://localhost:${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error ${err.message}`)
    server.close(() => process.exit(1))
})