const express = require('express')
const htmlRoutes = require('./routes/htmlRoutes')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
