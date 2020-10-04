const asyncHandler = require('../middlewares/asyncHandler')
const ErrorResponse = require('../dto/ErrorResponse')
const Notes = require('../model/Notes')

exports.getNotes = asyncHandler(async (req, res, next) => {
    const notes = await Notes.find()
    res.status(200).json({
        success: true,
        message: "That is so true!!",
        data: notes
    })
})

exports.addNote = asyncHandler(async (req, res, next) => {
    const note = await Notes.create(req.body)
    res.status(201).json({
        status: true,
        data: note
    })
})

exports.updateNote = asyncHandler(async (req, res, next) => {
    const note = await Notes.findById(req.params.id)

    if (!note) {
        return new ErrorResponse(`Note not found with Id ${req.params.id}`, 404)
    }

    note = await Notes.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({
        success: true,
        data: note
    })
})

exports.deleteNote = asyncHandler(async (req, res, next) => {
    const note = await Notes.findById(req.params.id)
    
    if (!note) {
        return new ErrorResponse(`Note not found with Id ${req.params.id}`, 404)
    }

    note = await Notes.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        data: note
    })
})