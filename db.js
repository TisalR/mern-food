const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://itpm:ITPMsemester1@cluster1.rrqml.mongodb.net/food-DB'

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log(`Mongo DB Connection Successful!`);
})

db.on('error', ()=>{
    console.log(`Mongo DB Connection Failed!`);
})

module.exports = mongoose