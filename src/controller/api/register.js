const User = require("../../model/user");

async function register(req, res) {
    const { username, password } = req.body;
    try {
        await User.query().insert({
            username,
            password
        })
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(400)
    }
}

module.exports = register