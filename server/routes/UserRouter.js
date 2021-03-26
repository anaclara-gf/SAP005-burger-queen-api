const { Router } = require('express');
const UserController = require('../controller/UserController');
const AuthController = require('../controller/AuthController');

const router = Router()

router.get("/users", AuthController.auth, UserController.getUsers);

router.get("/users/:userId", AuthController.auth, UserController.getUserId);

router.post("/users", AuthController.auth, UserController.createUsers);

router.put("/users/:userId", AuthController.auth, UserController.updateUsers);

router.delete("/users/:userId", AuthController.auth, UserController.deleteUsers);

module.exports = router