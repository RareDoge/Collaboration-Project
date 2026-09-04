const jwt = require("jsonwebtoken")

const generate_refresh_token = (user) => {
    // Uses user._id but i changed ._id to id
    return jwt.sign(
        { id: user._id, email: user.email }, // payload — keep it minimal, never include password
        process.env.JWT_SECRET,               // secret key, from .env
        { expiresIn: '1h' }                    // token lifespan
    );
}

const verify_token = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { generate_refresh_token, verify_token }