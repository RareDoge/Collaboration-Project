const User = require('../models/user')
const { verify_token } = require('../utils/jwt.utils')

const auth_middleware = async (req, res, next) => {
    const token = req.cookies.access_token
    if(!token)
    {
        console.log('no token found')
        return res.status(401).json({message: "Authentication Required"})
    }
    try {
        const result = verify_token(token)
        const user = await User.findOne({id: result.sub}).select("-password")
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = { auth_middleware }