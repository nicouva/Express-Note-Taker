const router = require('express').Router()
const { notes } = require('../db')
const fs = require('fs')

router.post('/notes', (req, res) => {
  notes.push(req.body)
  updateDb()
  console.log('Added new note')
  res.sendStatus(200)
})

router.get('/notes', (req, res) => {
  res.json(notes[req.params.id])
})

router.delete('/notes:id', (req, res) => {
  let id = req.params
  res.json(notes)
  let objextIndex = notes.findIndex(value => value.id === parseInt(id.id))
  console.log(objectIndex)
  notes.forEach((item, i) => {
    if (i === objextIndex) {
      notes.splice(i, 1)
    } else {
      console.log('error')
    }
  })
})

module.exports = router