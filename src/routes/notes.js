const router = require('express').Router()
const {
    getNotes,
    addNote,
    updateNote,
    deleteNote
} = require('../controllers/notes')

router.route('/')
.get(getNotes)
.post(addNote)

router.route('/:id')
.put(updateNote)
.delete(deleteNote)

module.exports = router