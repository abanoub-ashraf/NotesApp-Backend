import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connectToDB from './config/dbConfig.js'
import colors from 'colors'

const app = express()

config({ path: './config/.env' })

app.use(cors())

connectToDB()
    .then(result => {
        app.listen(process.env.PORT, () => {
            console.log(colors.blue(`Server is up and running on port ${process.env.PORT}...`).underline)
            console.log(colors.magenta('MongoDB is Connected!').underline)
        })
    })
    .catch(error => {
        console.log(error)
    })