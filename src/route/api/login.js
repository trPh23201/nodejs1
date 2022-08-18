const express = require('express')
const login = require('../../controller/api/login')
const router = express.Router()

router.post('/', login)

module.exports = router

