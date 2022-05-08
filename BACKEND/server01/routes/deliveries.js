const router = require("express").Router();
const Delivery = require("../models/delivery");
let Deliveries = require("../models/delivery");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const gender = Number(req.body.gender);
    const address = req.body.address;

    const newDelivery = new Delivery({

        name,
        age,
        gender,
        address
    })

    newDelivery.save().then(()=>{
        res.json("Delivery Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Delivery.find().then((deliveries)=>{
        res.json(deliveries)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {name, age, gender} = req.body;

    const updatedelivery = {
        name,
        age,
        gender,
        address
    }

    const update = await Delivery.findByIdAndUpdate(userId, updatedelivery).then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

   
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Delivery.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Delivery.findById(userId).then(() => {
        res.status(200).send({status: "User fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})


module.exports = router;