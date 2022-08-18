var jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) res.status(401).json({ messsage: "missing token" })

    jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) res.status(400).json(err)
        req.user = decoded
        next()
    });
}

module.exports = authenticateToken