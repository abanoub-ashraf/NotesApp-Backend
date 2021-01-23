import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { config } from 'dotenv'
import connectToDB from './config/dbConfig.js'
import startAPI from './helpers/startAPI.js'
import noteRoute from './routes/noteRoute.js'
import { pageNotFound } from './controllers/errorController.js'
import colors from 'colors'

const app = express()

config({ path: './config/.env' })

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', startAPI)
app.use('/notes', noteRoute)
app.use(pageNotFound)

connectToDB()
    .then(_result => {
        app.listen(process.env.PORT, () => {
            console.log(colors.blue(`Server is up and running on port ${process.env.PORT}...`).underline)
            console.log(colors.magenta('MongoDB is Connected!').underline)
        })
    })
    .catch(error => {
        console.log(colors.red(error).underline)
    })