const express = require("express")
const { home, register, allUser, login } = require("../controllers/apiController")
const router = express.Router()

router.get("/", home)
router.post("/register", register)
router.post("/login", login)
router.get("/all-users", allUser)

module.exports = router