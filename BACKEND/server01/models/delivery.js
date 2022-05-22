const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    
    name : {
        type : String,
        required: true
    },
    age : {
        type : Number,
        required: true
    },
    gender: {
        type : String,
        required: true
    },
    address: {
        type : String,
        required: true
    }
})

const Delivery = mongoose.model("Delivery",deliverySchema);

module.exports = Delivery;