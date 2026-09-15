const express = require("express")
const { home, register, allUser } = require("../controllers/apiController")
const router = express.Router()

router.get("/", home)
router.post("/register", register)
router.get("/all-users", allUser)

module.exports = router