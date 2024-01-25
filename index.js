const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const employee = require('./Model/Model')

const app = express()
const session = require('express-session');
const cookie = require('cookie-parser')
const bodyParser = require('body-parser')

//app.use(express.json())
app.use(cors({
    origin:['http://localhost:5173'],
    methods:['POST','GET'],
    credentials: true
}))


app.use(cookie())
app.use(bodyParser.json())

app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized:true
}))



mongoose.connect('mongodb://localhost:27017')
.then(()=>console.log("DB is Connected"))
.catch(err => console.log(err))

app.get('/', async(req,res)=>{
    if(req.session.userId){
        const userData = await employee.findById({'_id': req.session.userId})
        return res.json({valid:true, user:userData})
    }else{
        return res.json({valid:false})
    }
})

app.post('/register',(req,res)=>{
    employee.create(req.body)
    .then((user)=>res.json(user))
    .catch((err)=>console.log(err))
})

app.post('/login',(req,res)=>{
    const {email,password} = req.body
    employee.findOne({'email': email})
    .then((user)=>{
        if (user) {
            if (user.password === password) {
                req.session.userId = user._id;
                console.log(req.session.userId)
                res.json("sucess")
            } else {
                res.json("Passwords do not match")
            }
        } else {
            res.json("User Not Exist")
        }
    })
})

app.get('/logout', async (req,res)=>{
    req.session.destroy()
    return res.json();
})

app.listen(3000,()=>{
    console.log(`server is created `);
})