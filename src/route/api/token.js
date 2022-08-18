const express = require('express')
const token = require('../../controller/api/token')
const router = express.Router()

router.post('/', token)

module.exports = router