const User = require("../models/user")
const bcrypt = require("bcrypt")

const home = (req, res) => {
    res.status(200).json({
        msg: "Hello World!"
    })
}

const register = async (req, res) => {
    const { name, email, gender, password } = req.body

    if (!name || !email || !gender || !password) {
        return res.status(400).json({
            msg: "All fields are required"
        })
    }

    const hashedPassword = await bcrypt.hash(password, +process.env.SALT)

    User.create({
        name,
        email,
        gender,
        password: hashedPassword
    }).then(user => {
        res.status(200).json({
            msg: "User registered successfully",
            user
        })
    }).catch(err => {
        res.status(500).json({
            msg: "Error occurred while registering user",
            err
        })
    })
}

const allUser = (req, res) => {
    User.find().then(users => {
        res.status(200).json({
            msg: "All users fetched successfully",
            users
        })
    }).catch(err => {
        res.status(500).json({
            msg: "Error occurred while fetching users",
            err
        })
    })
}

module.exports = {
    home,
    register,
    allUser
}