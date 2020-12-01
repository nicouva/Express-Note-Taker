const express = require('express')
const htmlRoutes = require('./routes/htmlRoutes.js')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', htmlRoutes)

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
