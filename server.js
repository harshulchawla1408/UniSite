const express = require('express')
const app = express()
const port = 9000
app.use(express.json());

var cors = require('cors')
app.use(cors())

const fs = require('fs');

const multer = require('multer')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();


// Generate JWT Token
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
};


let mystorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        var picname = Date.now() + file.originalname;
        cb(null, picname);
    }
});
let upload = multer({ storage: mystorage });

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/unisitedb').then(() => console.log('Connected to MongoDB!'));

//Register page
var registerSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: { type: String, unique: true },
    rollno: { type: String, unique: true },
    dob: String,
    gender: String,
    batch: String,
    degree: String,
    password: String,
    usertype: String
},
    { versionKey: false })
var registerModel = mongoose.model("register", registerSchema, "register");

app.post("/api/register", async (req, res) => {
    var newrecord = new registerModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        rollno: req.body.rollno,
        dob: req.body.dob,
        gender: req.body.gender,
        batch: req.body.batch,
        degree: req.body.degree,
        password: req.body.pass,
        usertype: "normal"
    })

    var result = await newrecord.save();

    if (result) {
        res.status(200).send({ statuscode: 1, msg: "Registration Successfull" })
    }
    else {
        res.status(500).send({ statuscode: 0, msg: "Registration failed" })
    }
})

//Login page
// app.post("/api/login", async (req, res) => {
//     var result = await registerModel.find({
//         email: req.body.email,
//         password: req.body.pass
//     }).select("-password").select("-phone");
//     if (result.length === 0) {
//         res.status(200).send({ statuscode: 0 })
//     }
//     else {
//         res.status(200).send({ statuscode: 1, pdata: result[0] })
//     }
// })
// Modify Login API
app.post("/api/login", async (req, res) => {
    var user = await registerModel.findOne({ email: req.body.email });

    if (!user || user.password !== req.body.pass) {
        return res.status(401).send({ statuscode: 0, msg: "Invalid Credentials" });
    }

    const token = generateToken(user);

    res.status(200).send({
        statuscode: 1,
        token,
        user: { firstname: user.firstname, email: user.email, rollno: user.rollno, batch: user.batch }
    });
});
// Get student details
router.get("/user", async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; // Extract token
        const decoded = jwt.verify(token, "your_secret_key");
        const user = await User.findById(decoded.id);
        res.json(user);
    } catch (err) {
        res.status(401).json({ message: "Unauthorized" });
    }
});


app.listen(port, () => {
    console.log("Server is running on " + port);
})

module.exports = router;
