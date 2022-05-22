const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    OrderNo:{
        type : String,
        require: 'This Feild is require'
    },
    CustomerName:{
        type : String,
        require: true
    },
    CustomerEmailAddress:{
        type : String,
        require: true
    },
    CustomerHomeAddress:{
        type : String,
        require: true
    },
    CustomerPhoneNo:{
        type : Number,
        require: true
    },
})


// validation
/*employeeSchema.get.path('emailaddress').validate((val) => { 
    emailaddressRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailaddressRegex.test(val);
}, 'Invalid emailaddress.');*/

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;