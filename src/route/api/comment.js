const express = require('express')
const { getAllComment } = require('../../controller/api/comment')
const router = express.Router()

router.get('/', getAllComment)

module.exports = router