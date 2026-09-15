const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        required: [true, "Name is required"],
        type: String
    },
    email: {
        required: [true, "Email is required"],
        type: String,
        unique: [true, "Email already exists"]
    },
    gender: {
        required: [true, "Gender is required"],
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "Please select a valid gender"
        }
    },
    password: {
        required: [true, "Password is required"],
        type: String
    }
}, {
    collection: "users",
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User