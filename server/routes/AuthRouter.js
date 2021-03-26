const { Router } = require('express')
const AuthController = require('../controller/AuthController')

const router = Router()

router.post("/auth", AuthController.login);

module.exports = router