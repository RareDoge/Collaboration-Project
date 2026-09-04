const express = require('express')
const get_profile = require('../controllers/profile')
const auth_middleware = require('../middleware/auth_middleware')

const profile_router = express.Router()

profile_router.get('/get_profile', auth_middleware, get_profile)
