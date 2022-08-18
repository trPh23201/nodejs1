const jwt = require("jsonwebtoken");
const Token = require("../../model/token");

async function token(req, res) {
    const refreshToken = req.body.token;
    try {
        if (!refreshToken) res.sendStatus(401)
        const result = await Token.query().where('token', refreshToken)
        if (result.length === 0) res.sendStatus(403)
        jwt.verify(refreshToken, process.env.TOKEN_SECRET, function (err, decoded) {
            if (err) res.sendStatus(403)
            const accessToken = jwt.sign({
                id: decoded.id,
                username: decoded.username,
            }, process.env.TOKEN_SECRET, { expiresIn: 30 })
            res.status(200).json(accessToken)
        });
    } catch (error) {
        res.sendStatus(400)
    }
}

module.exports = token