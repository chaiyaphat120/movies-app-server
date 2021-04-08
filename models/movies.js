const mongoose = require('mongoose')

const scheme = new mongoose.Schema(
    {
        title: String,
        years:String,
        rate:String,
        picture:{type:String , default:"noPic.png"}
    },
    { collection: 'movies' }
)

const company = mongoose.model('Movies', scheme)
module.exports = company
