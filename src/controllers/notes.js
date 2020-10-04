const asyncHandler = require('../middlewares/asyncHandler')
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