const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
            success: true,
            msg: "User registered successfully",
            user
        })
    }).catch(err => {
        res.status(500).json({
            success: false,
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

const login = (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            msg: "All fields are required"
        })
    }

    User.findOne({ email }).then(data => {
        if (!data) {
            return res.status(400).json({
                success: false,
                msg: "Data not found!"
            })
        }
        bcrypt.compare(password, data.password).then(result => {
            if (!result) {
                return res.status(400).json({
                    success: false,
                    msg: "Wrong credential!"
                })
            }
            const token = jwt.sign({user: data}, process.env.JWT_SECRET, { expiresIn: "30d" })
            res.status(200).json({
                success: true,
                msg: "Login successfull!",
                token
            })
        })
    }).catch(err => {
        return res.status(400).json({
            success: false,
            msg: "Something went wrong!"
        })
    })

}

module.exports = {
    home,
    register,
    allUser,
    login
}