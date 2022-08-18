const express = require('express')
const { getAllUser, getUserById, getOtherTable } = require('../../controller/api/user')
const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getUserById)
router.get('/:id/:slug', getOtherTable)

module.exports = router