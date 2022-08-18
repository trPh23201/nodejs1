const express = require('express')
const logout = require('../../controller/api/logout')
const router = express.Router()

router.delete('/', logout)

module.exports = router