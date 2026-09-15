const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))
const path = require("path")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded())
require("dotenv").config()

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGOURI).then(() => {
    console.log("Databse connected successfully");
}).catch(err => {
    console.log(err);
})


const apiRouter = require("./routes/api")
app.use("/api", apiRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is runing on http://localhost:${process.env.PORT}`);
})