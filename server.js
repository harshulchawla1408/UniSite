const express = require('express')
const app = express()
const port = 9000
app.use(express.json());

var cors = require('cors')
app.use(cors())

const fs = require('fs');

const multer  = require('multer')

let mystorage = multer.diskStorage({ 
    destination: (req, file, cb) => 
    {
      cb(null, "public/uploads");
    },
    filename: (req, file, cb) => 
    {
        var picname = Date.now() + file.originalname;
        cb(null, picname);
    } 
  });
  let upload = multer({ storage: mystorage });

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://127.0.0.1:27017/unisitedb').then(() => console.log('Connected to MongoDB!'));

//Register page
var registerSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:{type:String,unique:true},
    rollno:{type:String,unique:true},
    dob:String,
    gender:String,
    batch:String,
    degree:String,
    password:String,
    usertype:String},
    {versionKey:false})
var registerModel = mongoose.model("register",registerSchema,"register");
 
app.post("/api/register",async(req,res)=>
{
    var newrecord = new registerModel({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        rollno:req.body.rollno,
        dob:req.body.dob,
        gender:req.body.gender,
        batch:req.body.batch,
        degree:req.body.degree,
        password:req.body.pass,
        usertype:"normal"
    })    

    var result = await newrecord.save();
    
    if(result)
    {
        res.status(200).send({statuscode:1,msg:"Registration Successfull"})
    }
    else
    {
        res.status(500).send({statuscode:0,msg:"Registration failed"})
    }    
})

//Login page
app.post("/api/login",async(req,res)=>
{
    var result = await registerModel.find({
        email:req.body.email,
        password:req.body.pass
    }).select("-password").select("-phone");
    if(result.length===0)
    {
        res.status(200).send({statuscode:0})
    }
    else
    {
        res.status(200).send({statuscode:1,pdata:result[0]})
    }    
})

app.listen(port,()=>
    {
        console.log("Server is running on " + port);
    })