const jwt = require("jsonwebtoken");
const Token = require("../../model/token");
const User = require("../../model/user");

async function login(req, res) {
    const { username, password } = req.body;
    try {
        const result = await User.query().where('username', username).where('password', password)
        if (result.length !== 0) {
            const token = jwt.sign({
                id: result[0].id,
                username: result[0].username,
            }, process.env.TOKEN_SECRET, { expiresIn: 30 })
            const refresh = jwt.sign({
                id: result[0].id,
                username: result[0].username,
            }, process.env.TOKEN_SECRET)
            await Token.query().insert({token: refresh})
            res.status(200).json({
                token,
                refresh
            })
        } else res.sendStatus(404)
    } catch (error) {
        res.sendStatus(400)
    }
}

module.exports = login