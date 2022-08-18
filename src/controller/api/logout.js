const Token = require("../../model/token");

async function token(req, res) {
    const refreshToken = req.body.token;
    try {
        await Token.query().delete().where('token', refreshToken)
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

module.exports = token