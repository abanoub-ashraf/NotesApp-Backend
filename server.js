const express = require('express')
const colors = require('colors')

const app = express()

app.listen(3000, () => console.log(colors.blue('Server is up and running on port 3000...').underline))