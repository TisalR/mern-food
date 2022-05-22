const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
      
    useUnifiedTopology: true,
    
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success");
})

const deliveryRouter = require("./routes/deliveries.js");

app.use("/delivery",deliveryRouter);

app.listen(PORT, () => {
    console.log("Server is up and running on port number: ",PORT)
})


