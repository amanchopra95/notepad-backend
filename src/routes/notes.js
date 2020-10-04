const router = require('express').Router()
const {
    getNotes,
    addNote
} = require('../controllers/notes')

router.route('/')
.get(getNotes)
.post(addNote)

module.exports = router