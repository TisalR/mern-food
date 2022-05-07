const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    EmployeeID: {
        type : String,
        required : true
    },

    EmployeeName : {
        type : String,
        required : true
    },
    DOB : {
        type : String,
        required : true
    },
    NIC : {
        type : String,
        required : true
    },
    Gender : {
        type : String,
        required : true
    },
    Address: {
        type : String,
        required : true
    },
    Email: {
        type : String,
        required : true
    },
    ContactNo: {
        type : String,
        required : true
    },

})
const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;