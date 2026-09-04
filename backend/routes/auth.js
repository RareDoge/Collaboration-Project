const express = require("express")
const {
    login_user,
    register_user,
    check_auth,
    logout,
} = require("../controllers/auth")
const { auth_middleware } = require("../middleware/auth_middleware")
const auth_router = express.Router()

auth_router.post("/login", login_user)
auth_router.post("/register", register_user)
auth_router.get("/check_auth", auth_middleware, check_auth)
auth_router.post("/logout", logout)


module.exports = { auth_router }
