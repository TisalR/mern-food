const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const { model } = require("../db");

const foodSchema = mongoose.Schema({

    name : {type: String , require},
    varients : [] ,
    prices : [] ,
    category : {type: String, require},
    image : {type: String, require},
    description : {type: String, require}

}, {
    timestamps:true,
})

const foodModel = mongoose.model('foods', foodSchema)

module.exports = foodModel