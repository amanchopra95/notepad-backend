const asyncHandler = require('../middlewares/asyncHandler')

exports.getNotes = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "That is so true!!"
    })
})