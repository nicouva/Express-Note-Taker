const router = require('express').Router()
const { notes } = require('../db')

router.post('/notes', (req, res) => {
  notes.push(req.body)
  res.sendStatus(200)
})

router.get('/notes', (req, res) => {
  res.json(notes)
})

router.delete('/notes/:id', (req, res) => {
  let id = req.params
  res.json(notes)
  let objectIndex = notes.findIndex(value => value.id === parseInt(id.id))
  notes.forEach((notes, i) => {
    if (i === objectIndex) {
      notes.splice(i, 1)
    } else {
      console.log('not working')
    }
  })
})

module.exports = router 