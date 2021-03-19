const { Router } = require('express')
const ExampleController = require('../controller/UserController')

const router = Router()

router.get("/users", UserController.getAllExamples);

router.get("/users/:userId", UserController.getAllExamples);

router.post("/users", UserController.getAllExamples);

router.put("/users/:userId", UserController.getAllExamples);

router.delete("/users/:userId", UserController.getAllExamples);

module.exports = router