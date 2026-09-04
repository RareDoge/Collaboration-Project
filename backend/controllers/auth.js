const bcrypt = require("bcrypt")
const User = require("../models/user")
const { generate_refresh_token, verify_token } = require("../utils/jwt.utils")


const login_user = async (req,res) => {
    try{
        console.log(req.body)
        const { email, password } = req.body
        const current_user = await User.findOne({email})

        if(!current_user) {
            console.log("1. NO USER")
            return res.status(404).json({message: "Invalid email"})
        }

        const is_password_valid = await bcrypt.compare(
            password,
            current_user.password,
        )

        if(!is_password_valid) {
            return res.status(401).json({message: "Invalid password"})
        }
        const token = generate_refresh_token(current_user)
        res.cookie("access_token", token, {
            /* Update to secure: true during deployment */
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        })

        res.json({
            message: "Successful Login!",
            user: {
                email: current_user.email
            },
        })
    } catch(error) {
        console.log(error)
        return res.status(500).json({message: "Server Error!"})
    }
}

const register_user = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const current_user = await User.findOne({email})
        if(current_user) {
            return res.status(409).json({message: " User already Exists!"})
        }
        const salt = await bcrypt.genSalt(10)
        const encrypted_password = await bcrypt.hash(password, salt)
        const new_user = await User.create({username, email, password: encrypted_password})
        res.status(200).json({
            message: "Successfully registed!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Server Error!"})
    }
}

const check_auth = async (req, res) => {
    const token = req.cookies.access_token
    if(!token) {
        console.log(token)
        return res.status(401).json({
            authenticated: false, message: "Token not available!"
        })
    }
    try {
        const result = verify_token(token)
        const user = await User.findOne({id: result._id}).select("-password")
        return res.json({authenticated:
            true,
            user: {
                id: user.id,
                email: user.email
            }
        })
    } catch (error){
        res.status(401).json({message: "Invalid or expired token"})
    } 
}

const logout = (req, res) => {
    try {
        res.clearCookie("access_token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        })
        res.json({ loggedOut: true });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {login_user, register_user, check_auth, logout}