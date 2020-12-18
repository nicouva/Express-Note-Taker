const express = require('express')
const htmlRoutes = require('./routes/htmlRoutes')
const notesRoutes = require('./routes/noteRoutes')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', notesRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
