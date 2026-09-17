const express = require("express")
const { home, register, allUser, login, checkAuth } = require("../controllers/apiController")
const router = express.Router()

router.get("/", home)
router.post("/register", register)
router.post("/login", login)
router.get("/all-users", allUser)
router.post("/check-auth", checkAuth)

module.exports = router