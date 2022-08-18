const express = require('express')
const register = require('../../controller/api/register')
const router = express.Router()

router.post('/', register)

module.exports = router

