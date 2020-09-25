import express, { Application } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app:Application = express()

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(`Server has started at http://localhost:${PORT}`)
})

process.on('unhandledRejection', (err:any, promise) => {
    console.log(`Error ${err.message}`)
    server.close(() => process.exit(1))
})