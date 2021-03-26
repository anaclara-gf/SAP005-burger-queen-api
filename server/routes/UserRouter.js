const { Router } = require('express')
const UserController = require('../controller/UserController')

const router = Router()

router.get("/users", UserController.getUsers);

router.get("/users/:userId", UserController.getUserId);

router.post("/users", UserController.createUsers);

router.put("/users/:userId", UserController.updateUsers);

router.delete("/users/:userId", UserController.deleteUsers);

module.exports = router