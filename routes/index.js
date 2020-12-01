const router = require('express').Router()
const { notes } = require('../db')

router.post('/notes', (req, res) => {
  notes.push(req.body)
  updateDb()
  console.log('Added new note')
  res.sendStatus(200)
})

router.get('/notes', (req, res) => {
  res.json(notes[req.params.id])
})

router.delete('api/notes:id', (req, res) => {
  notes.splice(req.params.id, 1)
  updateDb()
  console.log('Deleted note with id')
})

function updateDb() {
  fs.writeFile('db/db.json', JSON.stringify(notes, '\t'), err => {
    console.log(err)
  })
}

module.exports = router