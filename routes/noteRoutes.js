const router = require('express').Router()
const { notes } = require('../db')
const fs = require('fs')

router.get('/notes', (req, res) => {
  let savedNotes = JSON.parse(fs.readFileSync('../db', 'utf8'))
  res.json(savedNotes[Number(req.params.id)])
})

router.post('/notes', (req, res) => {
  let savedNotes = JSON.parse(fs.readFileSync('../db', 'utf8'))
  let newNote = req.body
  let uniqueID = (savedNotes.length).toString()
  newNote.id = uniqueID
  savedNotes.push(newNote)

  fs.writeFileSync('../db', JSON.stringify(savedNotes))
  console.log('Note Saved!')
  res.json(savedNotes)
})

router.delete('/notes/:id', (req, res) => {
  let savedNotes = JSON.parse(fs.readFileSync('../db', 'utf8'))
  let notedID = req.params.id
  let newID = 0
  console.log(`Deleting with Note ${noteID}`)
  savedNotes = savedNotes.filter(currentNote => {
    return currentNote.id != noteID
  })
  for (currentNote of savedNotes) {
    currentNote.id = newID.toString()
    newID++
  }
  fs.writeFileSync('../db', JSON.stringify(savedNotes))
  res.json(savedNotes)
})

module.exports = router