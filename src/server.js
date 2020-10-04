const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

// Routes
const notes = require('./routes/notes')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/v1/notes', notes)

const server = app.listen(PORT, () => {
    console.log(`Server has started at http://localhost:${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error ${err.message}`)
    server.close(() => process.exit(1))
})