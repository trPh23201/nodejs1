const express = require('express')
const router = express.Router()
const postRouter = require('./api/post')
const userRouter = require('./api/user')
const commentRouter = require('./api/comment')
const registerRouter = require('./api/register')
const loginRouter = require('./api/login')
const logoutRouter = require('./api/logout')
const tokenRouter = require('./api/token')
const authenticateToken = require('../middleware/auth')

router.get('/', (req, res) => {
    res.send('HELLO!!!!!!!!')
})
router.use('/api/post', postRouter)
router.use('/api/user', authenticateToken, userRouter)
router.use('/api/comment', commentRouter)
router.use('/api/register', registerRouter)
router.use('/api/login', loginRouter)
router.use('/api/logout', logoutRouter)
router.use('/api/token', tokenRouter)

module.exports = router