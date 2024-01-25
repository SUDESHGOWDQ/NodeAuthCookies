const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
        name :{
            type : String,
            required : true,
        },
        email :{
            type : String,
            required : true,
            unique : true,
        },
        password :{
            type : String,
            required:true,
        },
       
    })


const employee = new mongoose.model('employee',EmployeeSchema)
module.exports = employee