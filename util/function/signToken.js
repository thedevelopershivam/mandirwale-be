const jwt = require("jsonwebtoken");

const signToken = (id) => {
    const userToken = jwt.sign({ id }, process.env.TOKEN_SECRET)
    return userToken;
}

module.exports = signToken;