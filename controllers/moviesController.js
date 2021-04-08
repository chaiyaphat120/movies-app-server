const Movies = require('../models/movies')

exports.insert = async (req, res, next) => {
    try {
        const { title, years, rate } = req.body
        const movie = new Movies({
            title,
            years,
            rate,
        })
        await movie.save()
        res.status(200).json({
            data: movie,
        })
    } catch (error) {
        res.status(400).json({
            error,
        })
    }
}

exports.find = async (req, res, next) => {
    try {
        const movies = await Movies.find()
        res.status(200).json({
            data: movies,
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}
