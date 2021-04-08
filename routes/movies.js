const express = require('express')
const router = express.Router()
const moviesController = require("../controllers/moviesController")

router.post('/', moviesController.insert)
router.get('/', moviesController.find)
module.exports = router
