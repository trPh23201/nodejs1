const express = require('express')
const { getAllPost } = require("../../controller/api/post")
const router = express.Router()

router.get('/', getAllPost)

module.exports = router