const express = require("express");
const mongoose = require("mongoose");

const Food = require('./models/foodModel'
)
const db = require("./db.js")
const app = express();
app.use(express.json());

const foodsRoute = require('./routes/foodsRoute')

app.use('/api/foods/', foodsRoute)

app.get("/", (req, res) => {
    res.send("Server working!");
});



const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port!`);