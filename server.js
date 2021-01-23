import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connectToDB from './config/dbConfig.js'
import router from './routes/noteRoute.js'
import colors from 'colors'

const app = express()

config({ path: './config/.env' })

app.use(cors())

app.use('/notes', router)

app.use('/', (_req, res, next) => {
    res.status(200).json({
        message: 'API is Alive!'
    })
    next()
})

connectToDB()
    .then(_result => {
        app.listen(process.env.PORT, () => {
            console.log(colors.blue(`Server is up and running on port ${process.env.PORT}...`).underline)
            console.log(colors.magenta('MongoDB is Connected!').underline)
        })
    })
    .catch(error => {
        console.log(error)
    })